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
            description: string;
            id: string;
            product_name: string;
            price: number;
            oldPrice: number;
            quantity: number;
            categoryId: string;
            brandId: string;
            color: string[];
            filters: import("@prisma/client/runtime/library").JsonValue;
            product_status: import("@prisma/client").$Enums.ProductStatus;
            ordered: string[];
            createdAt: Date;
            updatedAt: Date;
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
