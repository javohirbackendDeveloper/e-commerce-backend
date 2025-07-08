import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import {
  UpdateOrderDto,
  UpdateOrderDtoForPunktAdmin,
} from "./dto/update-order.dto";
import { DeliverStatus } from "./enums/deliverType.enum";
import { PaymentStatus } from "./enums/paymentStatus.enum";
import { CartService } from "../cart/cart.service";
import { Request, Response } from "express";
import { firstValueFrom } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";
import { PrismaService } from "prisma/prisma.service";
import { OrderItem, Orders, OrderStatus, Prisma } from "@prisma/client";
import { GetOrdersByMonth, GetOrdersByYear } from "./dto/getOrderByDate.dto";
import { MonthlyDataDto } from "./dto/monthlyData.dto";
import { months } from "src/constants/months";
import { DeliverLocationDto } from "./dto/add-deliverDto";
import { point } from "@turf/helpers";
import { Feature, Point, Polygon } from "geojson";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";

@Injectable()
export class OrderService {
  constructor(
    private readonly cartService: CartService,
    @Inject("ORDER_SERVICE") private readonly orderClient: ClientProxy,
    @Inject("PUNKT_SERVICE") private readonly punktClient: ClientProxy,
    @Inject("STAFF_SERVICE") private readonly staffClient: ClientProxy,
    private readonly prismaService: PrismaService
  ) {}

  // APIS FOR USERS

  async create(createOrderDto: CreateOrderDto, req: Request): Promise<Orders> {
    try {
      const {
        deliveringType,
        paymenttype,
        locationLatitude,
        locationLongitude,
        recipient_locationText,
        punktId,
        recipient_firstname,
        recipient_lastname,
        recipient_phone,
      } = createOrderDto;

      // CHECKING USER
      const userId = req.headers["x_user_id"];

      if (!userId) {
        throw new HttpException(
          "Please login again to continue",
          HttpStatus.UNAUTHORIZED
        );
      }

      //  CHECKING DELIVERY TYPE

      if (
        deliveringType === "Courier" &&
        (!locationLatitude || !locationLongitude)
      ) {
        throw new HttpException(
          "Please select your location for our couriers",
          HttpStatus.BAD_REQUEST
        );
      } else if (deliveringType === "Punkt") {
        if (!punktId) {
          throw new HttpException(
            "Punkt ID is required",
            HttpStatus.BAD_REQUEST
          );
        }

        const punkt = await firstValueFrom(
          this.punktClient.send("get_one_punkt", punktId)
        );

        if (!punkt) {
          throw new HttpException(
            "This punkt not found with this id " + punktId,
            HttpStatus.NOT_FOUND
          );
        }
      }

      // GETTING CART PRODUCTS
      const cartProducts = await this.cartService.findAll(req);

      const { grandPrice, cartItemsWithProduct } = cartProducts;
      if (!cartItemsWithProduct.length) {
        throw new HttpException(
          "Please firstly add product to your cart",
          HttpStatus.NOT_FOUND
        );
      }

      // preparing order data to add

      const orderStatus =
        paymenttype === PaymentStatus.Card ? "Paid" : "AwaitingPayment";

      const deliverTime = new Date(
        Date.now() +
          (deliveringType === DeliverStatus.Punkt ? 2 : 3) * 24 * 60 * 60 * 1000
      );
      let createData: any = {
        userId: userId as string,
        status: orderStatus,
        totalPrice: grandPrice,
        deliveringType,
        paymenttype,
        locationText: recipient_locationText,
        recipient_firstname,
        recipient_lastname,
        recipient_phone,
        deliverTime,
      };

      if (deliveringType === DeliverStatus.Courier) {
        const theNearestPunkt = await this.getTheNearestPunkt(
          locationLongitude,
          locationLatitude
        );

        createData.locationLongitude = locationLongitude;
        createData.locationLatitude = locationLatitude;
        createData.punktId = theNearestPunkt.nearestPunkt?.id;
      } else {
        createData.punktId = punktId;
      }

      const order = await this.prismaService.orders.create({
        data: {
          ...createData,
        },
      });

      await this.createOrderItem(req, order.id);
      const res = await this.cartService.removeAll(req);

      console.log({ res });

      // There must be reporter that reports to get_punkt_orders api of punkt_service when created new order
      return order;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async createOrderItem(req: Request, orderId: string): Promise<OrderItem[]> {
    try {
      const cartProducts = await this.cartService.findAll(req);
      const createdOrderItems = [];
      for (const product of cartProducts.cartItemsWithProduct) {
        const createdData = await this.prismaService.orderItem.create({
          data: {
            productId: product.productId,
            quantity: product.purchasedQuantity,
            userId: product.userId,
            orderId,
            price: product.price,
            product_image: product.product_images[0].imageUrl,
            product_name: product.product_name,
          },
        });
        createdOrderItems.push(createdData);
      }

      return createdOrderItems;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // getting the nearest punkt if the user chose Courier

  async getTheNearestPunkt(longitude: number, latitude: number) {
    try {
      const allPunkts = await firstValueFrom(
        this.punktClient.send("get_all_punkts", {})
      );

      if (!allPunkts || allPunkts.length === 0) {
        throw new HttpException("No punkts found", HttpStatus.NOT_FOUND);
      }

      let nearestPunkt = null;
      let minDistance = Infinity;

      for (const punkt of allPunkts) {
        const distance = this.calculateHaversineDistance(
          latitude,
          longitude,
          punkt.locationLatitude,
          punkt.locationLongitude
        );

        if (distance < minDistance) {
          minDistance = distance;
          nearestPunkt = punkt;
        }
      }

      return {
        nearestPunkt,
        distance: minDistance,
      };
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getUserOrders(
    filterQueries: Prisma.OrdersWhereInput,
    req: Request
  ): Promise<Orders[]> {
    try {
      const userId = req.headers["x_user_id"];
      const existFilter: Prisma.OrdersWhereInput =
        await this.existFilters(filterQueries);

      const orders = await this.prismaService.orders.findMany({
        where: { userId: userId as string, ...existFilter },
        include: {
          orderItems: {},
        },
      });

      return orders;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(
    id: string,
    updateOrderDto: UpdateOrderDto,
    req: Request
  ): Promise<Orders> {
    try {
      const {
        recipient_firstname,
        recipient_lastname,
        recipient_locationText,
        recipient_phone,
      } = updateOrderDto;
      const userId = req.headers["x_user_id"];

      const order = await this.prismaService.orders.findUnique({
        where: { id, userId: userId as string },
      });

      if (!order) {
        throw new HttpException(
          "This order not found with this id " + id,
          HttpStatus.NOT_FOUND
        );
      }

      if (order.userId.toString() !== userId.toString()) {
        throw new HttpException(
          "You cannot update this order",
          HttpStatus.UNAUTHORIZED
        );
      }

      const allowedOrderStatus = ["AwaitingPayment", "Created"];

      if (!allowedOrderStatus.includes(order.status)) {
        throw new HttpException(
          "You cannot update this order",
          HttpStatus.BAD_REQUEST
        );
      }

      const updatedOrder = await this.prismaService.orders.update({
        where: { id },
        data: {
          recipient_firstname,
          recipient_lastname,
          locationText: recipient_locationText,
          recipient_phone,
          status: "Cancelled",
        },
      });

      return updatedOrder;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // APIS FOR PUNKTS

  async getPunktOrders(
    filterQueries: Prisma.OrdersWhereInput,
    req: Request
  ): Promise<Orders[]> {
    try {
      const punktAdmin = await this.getOnePunktAdmin(req);

      if (!punktAdmin.punktId) {
        throw new HttpException(
          "You don't have any punkts yet",
          HttpStatus.BAD_REQUEST
        );
      }

      const existFilters: Prisma.OrdersWhereInput =
        await this.existFilters(filterQueries);

      const orders = await this.prismaService.orders.findMany({
        where: { punktId: punktAdmin.punktId, ...existFilters },
      });

      return orders;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updatOrdersForPunktAdmin(
    id: string,
    updateOrderDto: UpdateOrderDtoForPunktAdmin,
    req: Request
  ): Promise<Orders> {
    try {
      const { status } = updateOrderDto;

      const punktAdmin = await this.getOnePunktAdmin(req);

      if (!punktAdmin.punktId) {
        throw new HttpException(
          "You don't have any punkt yet",
          HttpStatus.BAD_REQUEST
        );
      }
      const order = await this.prismaService.orders.findUnique({
        where: { id, punktId: punktAdmin.punktId },
      });

      if (!order) {
        throw new HttpException(
          "This order not found in your punkt",
          HttpStatus.NOT_FOUND
        );
      }

      const allowedOrderStatus = [
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
      ];

      if (!allowedOrderStatus.includes(status)) {
        throw new HttpException(
          "You cannot update this order to this status " + status,
          HttpStatus.BAD_REQUEST
        );
      }

      const updatedOrder = await this.prismaService.orders.update({
        where: { id },
        data: {
          status,
        },
      });

      return updatedOrder;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // PRIVATE FUNCTIONS

  private existFilters(filterQueries: Prisma.OrdersWhereInput) {
    let existFilter: Prisma.OrdersWhereInput = {};

    if (filterQueries.status) {
      existFilter.status = filterQueries.status;
    }
    if (
      filterQueries.deliveringType &&
      Object.values(DeliverStatus).includes(
        filterQueries.deliveringType as DeliverStatus
      )
    ) {
      existFilter.deliveringType = filterQueries.deliveringType;
    }
    if (
      filterQueries.paymenttype &&
      Object.values(PaymentStatus).includes(
        filterQueries.paymenttype as PaymentStatus
      )
    ) {
      existFilter.paymenttype = filterQueries.paymenttype;
    }
    if (filterQueries.punktId) {
      existFilter.punktId = filterQueries.punktId;
    }
    return existFilter;
  }

  // get one punktAdmin
  async getOnePunktAdmin(req: Request) {
    const punktAdminId = req.headers["x_user_id"];

    const punktAdmin = await firstValueFrom(
      this.staffClient.send("get_one_punktAdmin", punktAdminId)
    );

    if (!punktAdmin) {
      throw new HttpException(
        "You are not punkt-admin",
        HttpStatus.UNAUTHORIZED
      );
    }

    return punktAdmin;
  }

  // Haversine formula
  private calculateHaversineDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371;
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) *
        Math.cos(this.toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // Convert degrees to radians
  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  // APIS FOR ADMINS

  async updatOrdersForAdmin(
    id: string,
    updateOrderDto: UpdateOrderDtoForPunktAdmin
  ): Promise<Orders> {
    try {
      const { status } = updateOrderDto;

      const order = await this.prismaService.orders.findUnique({
        where: { id },
      });

      if (!order) {
        throw new HttpException(
          "This order not found with this id",
          HttpStatus.NOT_FOUND
        );
      }

      const allowedOrderStatus = [
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
      ];

      if (!allowedOrderStatus.includes(status)) {
        throw new HttpException(
          "You cannot update this order to this status " + status,
          HttpStatus.BAD_REQUEST
        );
      }

      const updatedOrder = await this.prismaService.orders.update({
        where: { id },
        data: {
          status: status as OrderStatus,
        },
      });

      return updatedOrder;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
  async getAllOrders(filterQueries: Prisma.OrdersWhereInput) {
    try {
      const existFilter = await this.existFilters(filterQueries);
      const orders = await this.prismaService.orders.findMany({
        where: { ...existFilter },
        include: {
          orderItems: true,
        },
      });

      const sortedOrders = orders.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      return sortedOrders;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getOneOrder(orderId: string) {
    try {
      const orders = await this.prismaService.orders.findUnique({
        where: { id: orderId },
        include: {
          orderItems: true,
        },
      });

      return orders;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getYearOrders(query: GetOrdersByYear) {
    try {
      const { year } = query;

      const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
      const endDate = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);

      const orders = await this.prismaService.orders.findMany({
        where: {
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      const monthlyDatas: MonthlyDataDto = {};

      for (const order of orders) {
        const valueCreatedMonth = months[new Date(order.createdAt).getMonth()];

        if (monthlyDatas[valueCreatedMonth]) {
          monthlyDatas[valueCreatedMonth] += 1;
        } else {
          monthlyDatas[valueCreatedMonth] = 1;
        }
      }
      return monthlyDatas;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getMonthOrders(query: GetOrdersByMonth) {
    try {
      const { year, month } = query;

      const monthIndex =
        months.findIndex((item) => month.toString() === item) + 1;

      const startDate = new Date(
        `${year}-${monthIndex.toString().padStart(2, "0")}-01T00:00:00.000Z`
      );
      const endDate = new Date(
        `${year}-${(monthIndex + 1).toString().padStart(2, "0")}-01T00:00:00.000Z`
      );

      const orders = await this.prismaService.orders.findMany({
        where: {
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      const dailyDatas: Record<string, number> = {};

      for (const order of orders) {
        const valueCreatedDay = new Date(order.createdAt).getDay();

        if (dailyDatas[valueCreatedDay]) {
          dailyDatas[valueCreatedDay] += 1;
        } else {
          dailyDatas[valueCreatedDay] = 1;
        }
      }
      return dailyDatas;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async addDeliverLocation(deliverLocationDto: DeliverLocationDto) {
    try {
      const { coordinates } = deliverLocationDto;

      const allLocations = (
        await this.prismaService.deliverExistLocations.findMany()
      ).length;
      const createdLocation =
        await this.prismaService.deliverExistLocations.create({
          data: { coordinates, name: `${allLocations + 1}-hudud` },
        });

      return createdLocation;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getLocations() {
    try {
      const locations =
        await this.prismaService.deliverExistLocations.findMany();

      return locations;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async isExistInLocation(lat: number, lng: number) {
    try {
      const allLocations = await this.getLocations();

      const userPoint = point([lng, lat]);
      for (const location of allLocations) {
        const cords = location.coordinates;

        const polygon: Polygon = cords;

        const inside = booleanPointInPolygon(userPoint, polygon);
        if (inside) {
          return { exists: true, location: location.id };
        }
      }

      return { exists: false, location: "" };
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteLocation(id: string) {
    try {
      const deletedLocation =
        await this.prismaService.deliverExistLocations.delete({
          where: {
            id,
          },
        });

      return deletedLocation;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // apis for rabbitmq

  async getOrderedProductIds(userId: string) {
    try {
      const userOrders = await this.prismaService.orders.findMany({
        where: { userId, status: "Delivered" },
        select: {
          orderItems: true,
        },
      });

      return userOrders;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
  // api for keeping auto sleep
  async keepHealthServer(res: Response) {
    res.json({ message: "Hello world from order service" });
  }
}
