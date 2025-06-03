import { CategoryService } from "./category.service";
import { CreateCategoryDto, CreateSubCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(file: Express.Multer.File, createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto>;
    createSubCategory(createSubCategoryDto: CreateSubCategoryDto): Promise<{
        id: string;
        parentId: string | null;
        icon: string | null;
        title: string;
        children: number;
    }>;
    findAll(): Promise<{
        id: string;
        parentId: string | null;
        icon: string | null;
        title: string;
        children: number;
    }[]>;
    getAllLeafCategories(): Promise<{
        id: string;
        parentId: string | null;
        icon: string | null;
        title: string;
        children: number;
    }[]>;
    findAllParentCats(): Promise<{
        id: string;
        parentId: string | null;
        icon: string | null;
        title: string;
        children: number;
    }[]>;
    findAllParentsWithSubCats(): Promise<import("./dto/return.dto").ReturnParentWithSubDto[]>;
    findOne(id: string): Promise<{
        id: string;
        parentId: string | null;
        icon: string | null;
        title: string;
        children: number;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto, file: Express.Multer.File): Promise<CreateCategoryDto>;
    remove(id: string): Promise<{
        message: string;
    }>;
    findAllChildCatsByParentid(id: string): Promise<{
        id: string;
        parentId: string | null;
        icon: string | null;
        title: string;
        children: number;
    }[]>;
}
