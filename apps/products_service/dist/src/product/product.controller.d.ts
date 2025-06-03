import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { FilterQueryDto } from "./dto/filterQuery.dto";
import { Product } from "generated/prisma";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
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
        filters: import("generated/prisma/runtime/library").JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("generated/prisma").$Enums.ProductStatus;
    }>;
    findAll(limit?: string, page?: string): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: import("generated/prisma/runtime/library").JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("generated/prisma").$Enums.ProductStatus;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: import("generated/prisma/runtime/library").JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("generated/prisma").$Enums.ProductStatus;
    }>;
    getAllProductsByCategory(categoryId: string, filter: FilterQueryDto): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: import("generated/prisma/runtime/library").JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("generated/prisma").$Enums.ProductStatus;
    }[]>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: import("generated/prisma/runtime/library").JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("generated/prisma").$Enums.ProductStatus;
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
    filterProducts(filter: FilterQueryDto, products: Product[]): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: import("generated/prisma/runtime/library").JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("generated/prisma").$Enums.ProductStatus;
    }[]>;
    getProductByIds(productIds: string[]): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: import("generated/prisma/runtime/library").JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("generated/prisma").$Enums.ProductStatus;
    }[]>;
    getOneProductById(productId: string): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: import("generated/prisma/runtime/library").JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("generated/prisma").$Enums.ProductStatus;
    }>;
}
