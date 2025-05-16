import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { DeliverStatus } from "./enums/deliverType.enum";
import { PaymentStatus } from "./enums/paymentStatus.enum";
import { CartService } from "../cart/cart.service";
import { Request } from "express";
import { firstValueFrom } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";
import { OrderStatus } from "./enums/orderStatus.enum";
import { PrismaService } from "apps/order_service/prisma/prisma.service";
import { Orders } from "apps/order_service/generated/prisma";

@Injectable()
export class OrderService {
  constructor(
    private readonly cartService: CartService,
    @Inject("ORDER_SERVICE") private readonly orderClient: ClientProxy,
    @Inject("PUNKT_SERVICE") private readonly punktClient: ClientProxy,
    private readonly prismaService: PrismaService
  ) {}

  // APIS FOR USERS

  async create(createOrderDto: CreateOrderDto, req: Request) {
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
        payment: { amount, card_number, payment_type },
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
        (deliveringType === DeliverStatus.Courier && !locationLatitude) ||
        !locationLongitude
      ) {
        throw new HttpException(
          "Please select your location for our couriers",
          HttpStatus.BAD_REQUEST
        );
      } else if (deliveringType === DeliverStatus.Punkt) {
        if (!punktId) {
          throw new HttpException(
            "Punkt ID is required",
            HttpStatus.BAD_REQUEST
          );
        }
        const punkt = await firstValueFrom(
          this.punktClient.send("get_one_punkt", punktId)
        );
        console.log({ punkt });

        if (!punkt) {
          throw new HttpException(
            "This punkt not found with this id " + punktId,
            HttpStatus.NOT_FOUND
          );
        }
      }

      // GETTING CART PRODUCTS
      const cartProducts = await this.cartService.findAll(req);

      if (!cartProducts?.cartItemsWithProduct.length) {
        throw new HttpException(
          "Please firstly add product to your cart",
          HttpStatus.NOT_FOUND
        );
      }

      // CHECKING PAYMENT TYPE
      if (paymenttype === PaymentStatus.Card) {
        if (amount !== cartProducts.grandPrice) {
          throw new HttpException(
            "Please pay enough money",
            HttpStatus.CONFLICT
          );
        }
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
        totalPrice: cartProducts?.grandPrice,
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

        console.log({ theNearestPunkt });

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

      // There must be reporter that reports to get_punkt_orders api of punkt_service when created new order
      // return order;
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

  async getUserOrders(req: Request): Promise<Orders[]> {
    try {
      const userId = req.headers["x_user_id"];

      const orders = await this.prismaService.orders.findMany({
        where: { userId: userId as string },
      });

      return orders;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto, req: Request) {
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
}
