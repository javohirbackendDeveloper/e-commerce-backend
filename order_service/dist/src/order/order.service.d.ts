import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto, UpdateOrderDtoForPunktAdmin } from "./dto/update-order.dto";
import { CartService } from "../cart/cart.service";
import { Request, Response } from "express";
import { ClientProxy } from "@nestjs/microservices";
import { PrismaService } from "prisma/prisma.service";
import { OrderItem, Orders, Prisma } from "@prisma/client";
import { GetOrdersByMonth, GetOrdersByYear } from "./dto/getOrderByDate.dto";
import { MonthlyDataDto } from "./dto/monthlyData.dto";
import { DeliverLocationDto } from "./dto/add-deliverDto";
export declare class OrderService {
    private readonly cartService;
    private readonly orderClient;
    private readonly punktClient;
    private readonly staffClient;
    private readonly prismaService;
    constructor(cartService: CartService, orderClient: ClientProxy, punktClient: ClientProxy, staffClient: ClientProxy, prismaService: PrismaService);
    create(createOrderDto: CreateOrderDto, req: Request): Promise<Orders>;
    createOrderItem(req: Request, orderId: string): Promise<OrderItem[]>;
    getTheNearestPunkt(longitude: number, latitude: number): Promise<{
        nearestPunkt: any;
        distance: number;
    }>;
    getUserOrders(filterQueries: Prisma.OrdersWhereInput, req: Request): Promise<Orders[]>;
    update(id: string, updateOrderDto: UpdateOrderDto, req: Request): Promise<Orders>;
    getPunktOrders(filterQueries: Prisma.OrdersWhereInput, req: Request): Promise<Orders[]>;
    updatOrdersForPunktAdmin(id: string, updateOrderDto: UpdateOrderDtoForPunktAdmin, req: Request): Promise<Orders>;
    private existFilters;
    getOnePunktAdmin(req: Request): Promise<any>;
    private calculateHaversineDistance;
    private toRadians;
    updatOrdersForAdmin(id: string, updateOrderDto: UpdateOrderDtoForPunktAdmin): Promise<Orders>;
    getAllOrders(filterQueries: Prisma.OrdersWhereInput): Promise<({
        orderItems: {
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            productId: string;
            product_name: string;
            product_image: string;
            price: number;
            orderId: string;
        }[];
    } & {
        id: string;
        userId: string;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalPrice: number;
        deliveringType: import("@prisma/client").$Enums.DeliveringType;
        paymenttype: import("@prisma/client").$Enums.PaymentType;
        locationText: string | null;
        locationLongitude: number | null;
        locationLatitude: number | null;
        punktId: string;
        recipient_firstname: string;
        recipient_lastname: string;
        recipient_phone: string;
        deliverTime: Date;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getOneOrder(orderId: string): Promise<{
        orderItems: {
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            productId: string;
            product_name: string;
            product_image: string;
            price: number;
            orderId: string;
        }[];
    } & {
        id: string;
        userId: string;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalPrice: number;
        deliveringType: import("@prisma/client").$Enums.DeliveringType;
        paymenttype: import("@prisma/client").$Enums.PaymentType;
        locationText: string | null;
        locationLongitude: number | null;
        locationLatitude: number | null;
        punktId: string;
        recipient_firstname: string;
        recipient_lastname: string;
        recipient_phone: string;
        deliverTime: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getYearOrders(query: GetOrdersByYear): Promise<MonthlyDataDto>;
    getMonthOrders(query: GetOrdersByMonth): Promise<Record<string, number>>;
    addDeliverLocation(deliverLocationDto: DeliverLocationDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        coordinates: Prisma.JsonValue;
    }>;
    getLocations(): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        coordinates: Prisma.JsonValue;
    }[]>;
    isExistInLocation(lat: number, lng: number): Promise<{
        exists: boolean;
        location: string;
    }>;
    deleteLocation(id: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        coordinates: Prisma.JsonValue;
    }>;
    getOrderedProductIds(userId: string): Promise<{
        orderItems: {
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            productId: string;
            product_name: string;
            product_image: string;
            price: number;
            orderId: string;
        }[];
    }[]>;
    keepHealthServer(res: Response): Promise<void>;
}
