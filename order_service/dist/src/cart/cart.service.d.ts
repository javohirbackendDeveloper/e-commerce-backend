import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Request, Response } from "express";
import { ClientProxy } from "@nestjs/microservices";
import { ReturnTotals } from "./dto/return.dto";
import { PrismaService } from "prisma/prisma.service";
import { CartItem } from "@prisma/client";
export declare class CartService {
    private readonly prismService;
    private readonly orderClient;
    private readonly productClient;
    constructor(prismService: PrismaService, orderClient: ClientProxy, productClient: ClientProxy);
    create(createCartItemDto: CreateCartDto, req: Request): Promise<{
        id: string;
        userId: string;
        quantity: number;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getPriceQuantity(req: Request): Promise<ReturnTotals>;
    update(id: string, updateCartDto: UpdateCartDto, req: Request): Promise<CartItem>;
    remove(id: string, req: Request): Promise<{
        id: string;
        userId: string;
        quantity: number;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(req: Request): Promise<{
        cartItemsWithProduct: any[];
        grandPrice: any;
    }>;
    removeAll(req: Request): Promise<import("@prisma/client").Prisma.BatchPayload>;
    payment(req: Request, res: Response): Promise<void>;
}
