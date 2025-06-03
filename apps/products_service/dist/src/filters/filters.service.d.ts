import { CreateFilterValue, CreateGeneralFilterDto, CreateSpecificFilterDto } from "./dto/create-filter.dto";
import { UpdateFilterDto } from "./dto/update-filter.dto";
import { PrismaService } from "prisma/prisma.service";
import { FilterType, FilterValues } from "generated/prisma";
import { ReturnSpecificFunction } from "./dto/return.dto";
import { CategoryService } from "../category/category.service";
export declare class FiltersService {
    private readonly categoryService;
    private readonly prismaService;
    constructor(categoryService: CategoryService, prismaService: PrismaService);
    create(createGeneralFilterDto: CreateGeneralFilterDto): Promise<FilterType>;
    findAll(): Promise<FilterType[]>;
    findOne(id: string): Promise<{
        filterCategory: {
            id: string;
            categoryId: string;
            filterId: string;
        }[];
        values: {
            id: string;
            filterId: string;
            value: string;
        }[];
    } & {
        title: string;
        inputType: import("generated/prisma").$Enums.InputType;
        type: import("generated/prisma").$Enums.TypeOfFilter;
        id: string;
    }>;
    update(id: string, updateFilterDto: UpdateFilterDto): Promise<FilterType>;
    remove(id: string): Promise<FilterType>;
    getFiltersByCategoryId(categoryId: string): Promise<({
        filter: {
            values: {
                id: string;
                filterId: string;
                value: string;
            }[];
        } & {
            title: string;
            inputType: import("generated/prisma").$Enums.InputType;
            type: import("generated/prisma").$Enums.TypeOfFilter;
            id: string;
        };
    } & {
        id: string;
        categoryId: string;
        filterId: string;
    })[]>;
    createSpecificFilter(createGeneralFilterDto: CreateSpecificFilterDto): Promise<ReturnSpecificFunction>;
    findAllSpecific(): Promise<FilterType[]>;
    removeSpecificFilter(id: string): Promise<FilterType>;
    createValue(createValue: CreateFilterValue): Promise<FilterValues[]>;
    deleteValue(id: string): Promise<FilterValues>;
}
