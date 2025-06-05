import { CreateBrandWithCategoryDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { CategoryService } from "../category/category.service";
import { PrismaService } from "prisma/prisma.service";
import { BrandType, ReturnCreatedBrandCategory } from "./dto/return.dto";
import { Brand } from "@prisma/client";
export declare class BrandService {
    private readonly categoryService;
    private readonly prismaService;
    constructor(categoryService: CategoryService, prismaService: PrismaService);
    createBrandWithCategory(dto: CreateBrandWithCategoryDto): Promise<ReturnCreatedBrandCategory>;
    findByCategoryId(id: string): Promise<any[]>;
    findOne(id: number): void;
    findAll(): Promise<({
        categories: ({
            category: {
                title: string;
                parentId: string | null;
                id: string;
                children: number;
                icon: string | null;
            };
        } & {
            id: string;
            categoryId: string;
            brandId: string;
        })[];
    } & {
        id: string;
        name: string;
    })[]>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<ReturnCreatedBrandCategory>;
    remove(id: string): Promise<BrandType>;
    createBrandCategory(categoryId: string[], brand: Brand): Promise<any[]>;
}
