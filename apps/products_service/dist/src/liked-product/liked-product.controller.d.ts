import { LikedProductService } from "./liked-product.service";
import { CreateLikedProductDto } from "./dto/create-liked-product.dto";
import { Request } from "express";
export declare class LikedProductController {
    private readonly likedProductService;
    constructor(likedProductService: LikedProductService);
    create(req: Request, createLikedProductDto: CreateLikedProductDto): Promise<{
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
    remove(req: Request, id: string): Promise<{
        message: string;
    }>;
}
