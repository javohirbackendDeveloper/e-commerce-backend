import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto, UpdateOrderDtoForPunktAdmin } from "./dto/update-order.dto";
import { CartService } from "../cart/cart.service";
import { Request } from "express";
import { ClientProxy } from "@nestjs/microservices";
import { PrismaService } from "prisma/prisma.service";
import { Orders, Prisma } from "@prisma/client";
export declare class OrderService {
    private readonly cartService;
    private readonly orderClient;
    private readonly punktClient;
    private readonly staffClient;
    private readonly prismaService;
    constructor(cartService: CartService, orderClient: ClientProxy, punktClient: ClientProxy, staffClient: ClientProxy, prismaService: PrismaService);
    create(createOrderDto: CreateOrderDto, req: Request): Promise<Orders>;
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
    getAllOrders(filterQueries: Prisma.OrdersWhereInput): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalPrice: number;
        deliveringType: import("@prisma/client").$Enums.DeliveringType;
        paymenttype: import("@prisma/client").$Enums.PaymentType;
        locationText: string;
        locationLongitude: number | null;
        locationLatitude: number | null;
        punktId: string;
        recipient_firstname: string;
        recipient_lastname: string;
        recipient_phone: string;
        deliverTime: Date;
    }[]>;
}
