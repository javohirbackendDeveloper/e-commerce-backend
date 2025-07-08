import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Request, Response } from "express";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(req: Request, dto: CreateCartDto): Promise<{
        id: string;
        userId: string;
        quantity: number;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getPriceQuantity(req: Request): Promise<import("./dto/return.dto").ReturnTotals>;
    findAll(req: Request): Promise<{
        cartItemsWithProduct: any[];
        grandPrice: any;
    }>;
    update(req: Request, id: string, dto: UpdateCartDto): Promise<{
        id: string;
        userId: string;
        quantity: number;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeAll(req: Request): Promise<import("@prisma/client").Prisma.BatchPayload>;
    remove(req: Request, id: string): Promise<{
        id: string;
        userId: string;
        quantity: number;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    payment(req: Request, res: Response): Promise<void>;
}
