import { CreateLikedProductDto } from "./dto/create-liked-product.dto";
import { PrismaService } from "prisma/prisma.service";
import { Request } from "express";
export declare class LikedProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createLikedProductDto: CreateLikedProductDto, req: Request): Promise<{
        id: string;
        userId: string | null;
        productId: string;
        createdAt: Date;
    } | {
        message: string;
    }>;
    findAll(req: Request): Promise<({
        product: {
            product_images: {
                id: string;
                productId: string;
                imageUrl: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            product_name: string;
            description: string;
            oldPrice: number;
            price: number;
            quantity: number;
            color: string[];
            filters: import("@prisma/client/runtime/library").JsonValue;
            ordered: string[];
            categoryId: string;
            brandId: string;
            product_status: import("@prisma/client").$Enums.ProductStatus;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string | null;
        productId: string;
        createdAt: Date;
    })[]>;
    remove(id: string, req: Request): Promise<{
        message: string;
    }>;
}
