import { CategoryService } from "./category.service";
import { CreateCategoryDto, CreateSubCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(file: Express.Multer.File, createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto>;
    createSubCategory(createSubCategoryDto: CreateSubCategoryDto): Promise<{
        title: string;
        parentId: string | null;
        id: string;
        icon: string | null;
        children: number;
    }>;
    findAll(): Promise<{
        title: string;
        parentId: string | null;
        id: string;
        icon: string | null;
        children: number;
    }[]>;
    getAllLeafCategories(): Promise<{
        title: string;
        parentId: string | null;
        id: string;
        icon: string | null;
        children: number;
    }[]>;
    findAllParentCats(): Promise<{
        title: string;
        parentId: string | null;
        id: string;
        icon: string | null;
        children: number;
    }[]>;
    findAllParentsWithSubCats(): Promise<import("./dto/return.dto").ReturnParentWithSubDto[]>;
    findOne(id: string): Promise<{
        title: string;
        parentId: string | null;
        id: string;
        icon: string | null;
        children: number;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto, file: Express.Multer.File): Promise<CreateCategoryDto>;
    remove(id: string): Promise<{
        message: string;
    }>;
    findAllChildCatsByParentid(id: string): Promise<{
        title: string;
        parentId: string | null;
        id: string;
        icon: string | null;
        children: number;
    }[]>;
}
