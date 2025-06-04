import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { CategoryService } from "../category/category.service";
import { SearchService } from "../search/search.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { ReturnMinMaxDto } from "./dto/return.dto";
import { FilterQueryDto } from "./dto/filterQuery.dto";
import { PrismaService } from "prisma/prisma.service";
import { Prisma, Product } from "@prisma/client";
import { Response } from "express";
export declare class ProductService {
    private readonly categoryService;
    private readonly prismaService;
    private readonly searchService;
    private readonly cloudinaryService;
    constructor(categoryService: CategoryService, prismaService: PrismaService, searchService: SearchService, cloudinaryService: CloudinaryService);
    createImage(files: Express.Multer.File[]): Promise<{
        message: string;
        uploadedFileUrls: string[];
    }>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(page?: number, limit?: number): Promise<Product[]>;
    findOne(id: string): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: Prisma.JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("@prisma/client").$Enums.ProductStatus;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: string;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: Prisma.JsonValue;
        ordered: string[];
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        brandId: string;
        product_status: import("@prisma/client").$Enums.ProductStatus;
    }>;
    remove(id: string): Promise<{
        message: string;
        success: boolean;
    }>;
    private deleteProductImages;
    deleteOneImage(imageId: string): Promise<{
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
    getProductsByIds(productIds: string[]): Promise<Product[]>;
    getAllChildCategoryIdsRecursive(categoryId: string): Promise<string[]>;
    filterProducts(products: Product[], allFilters: FilterQueryDto): Promise<Product[]>;
    getAllProductsByCategory(categoryId: string, filters: FilterQueryDto, page?: number, limit?: number): Promise<Product[]>;
    getMinMaxPrices(): Promise<ReturnMinMaxDto>;
    keepHealthServer(res: Response): Promise<void>;
}
