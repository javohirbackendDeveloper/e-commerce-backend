import { CreateLikedProductDto } from "./dto/create-liked-product.dto";
import { PrismaService } from "prisma/prisma.service";
import { Request } from "express";
export declare class LikedProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createLikedProductDto: CreateLikedProductDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        productId: string;
        userId: string | null;
    } | {
        message: string;
    }>;
    findAll(req: Request): Promise<({
        product: {
            id: string;
            categoryId: string;
            product_name: string;
            description: string;
            oldPrice: number;
            price: number;
            quantity: number;
            color: string[];
            filters: import("@prisma/client/runtime/library").JsonValue;
            ordered: string[];
            createdAt: Date;
            updatedAt: Date;
            brandId: string;
            product_status: import("@prisma/client").$Enums.ProductStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        productId: string;
        userId: string | null;
    })[]>;
    remove(id: string, req: Request): Promise<{
        message: string;
    }>;
}
