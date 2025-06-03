import { CreateCategoryDto, CreateSubCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "prisma/prisma.service";
import { Category } from "generated/prisma";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { ReturnParentWithSubDto } from "./dto/return.dto";
export declare class CategoryService {
    private readonly prismaService;
    private readonly cloudinaryService;
    constructor(prismaService: PrismaService, cloudinaryService: CloudinaryService);
    createSubCategory(createSubCategoryDto: CreateSubCategoryDto): Promise<{
        id: string;
        parentId: string | null;
        icon: string | null;
        title: string;
        children: number;
    }>;
    create(createCategoryDto: CreateCategoryDto, file: Express.Multer.File): Promise<CreateCategoryDto>;
    findAll(): Promise<Category[]>;
    findAllParentCats(): Promise<Category[]>;
    findAllParentsWithSubCats(): Promise<ReturnParentWithSubDto[]>;
    findOne(id: string): Promise<Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto, file: Express.Multer.File): Promise<CreateCategoryDto>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getAllChildCategories(categoryId: string): Promise<Category[]>;
    getAllChildCategoryIds(categoryId: string): Promise<string[]>;
    getAllLeafCategories(): Promise<Category[]>;
    getAllSecondCategories(): Promise<Category[]>;
}
