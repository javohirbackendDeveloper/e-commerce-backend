import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { ReduceQuantity, UpdateProductDto } from "./dto/update-product.dto";
import { FilterQueryDto } from "./dto/filterQuery.dto";
import { Response } from "express";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    keepHealthServer(res: Response): Promise<void>;
    createImages(product_images: Express.Multer.File[]): Promise<{
        message: string;
        uploadedFileUrls: string[];
    }>;
    create(createProductDto: CreateProductDto): Promise<{
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(limit?: string, page?: string): Promise<{
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        product_images: {
            id: string;
            imageUrl: string;
            productId: string;
        }[];
        comments: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productId: string;
            title: string;
            sent_person: string;
            image: string | null;
            stars: number;
            replyMessage: string | null;
        }[];
        likes: {
            id: string;
            createdAt: Date;
            productId: string;
            userId: string | null;
        }[];
        category: {
            id: string;
            title: string;
            parentId: string | null;
            icon: string | null;
            children: number;
        };
        brand: {
            id: string;
            name: string;
        };
    } & {
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllProductsByCategory(categoryId: string): Promise<{
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        message: string;
        success: boolean;
    }>;
    deleteProductImage(id: string): Promise<{
        id: string;
        imageUrl: string;
        productId: string;
    } | {
        message: string;
    }>;
    uploadOneImage(file: Express.Multer.File, productId: string): Promise<{
        id: string;
        imageUrl: string;
        productId: string;
    }>;
    getMinMaxPrices(): Promise<import("./dto/return.dto").ReturnMinMaxDto>;
    filterProducts(filters: FilterQueryDto): Promise<{
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    reduce_products_quantity(updatedProducts: ReduceQuantity[]): Promise<{
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getProductByIds(productIds: string[]): Promise<{
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getOneProductById(productId: string): Promise<{
        product_images: {
            id: string;
            imageUrl: string;
            productId: string;
        }[];
        comments: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productId: string;
            title: string;
            sent_person: string;
            image: string | null;
            stars: number;
            replyMessage: string | null;
        }[];
        likes: {
            id: string;
            createdAt: Date;
            productId: string;
            userId: string | null;
        }[];
        category: {
            id: string;
            title: string;
            parentId: string | null;
            icon: string | null;
            children: number;
        };
        brand: {
            id: string;
            name: string;
        };
    } & {
        id: string;
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
        createdAt: Date;
        updatedAt: Date;
    }>;
}
