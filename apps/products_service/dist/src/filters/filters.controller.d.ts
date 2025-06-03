import { FiltersService } from "./filters.service";
import { CreateFilterValue, CreateGeneralFilterDto, CreateSpecificFilterDto } from "./dto/create-filter.dto";
import { UpdateFilterDto } from "./dto/update-filter.dto";
export declare class FiltersController {
    private readonly filtersService;
    constructor(filtersService: FiltersService);
    create(createGeneralFilterDto: CreateGeneralFilterDto): Promise<{
        type: import("generated/prisma").$Enums.TypeOfFilter;
        title: string;
        id: string;
        inputType: import("generated/prisma").$Enums.InputType;
    }>;
    findAll(): Promise<{
        type: import("generated/prisma").$Enums.TypeOfFilter;
        title: string;
        id: string;
        inputType: import("generated/prisma").$Enums.InputType;
    }[]>;
    findOne(id: string): Promise<{
        filterCategory: {
            id: string;
            categoryId: string;
            filterId: string;
        }[];
        values: {
            id: string;
            value: string;
            filterId: string;
        }[];
    } & {
        type: import("generated/prisma").$Enums.TypeOfFilter;
        title: string;
        id: string;
        inputType: import("generated/prisma").$Enums.InputType;
    }>;
    update(id: string, updateFilterDto: UpdateFilterDto): Promise<{
        type: import("generated/prisma").$Enums.TypeOfFilter;
        title: string;
        id: string;
        inputType: import("generated/prisma").$Enums.InputType;
    }>;
    remove(id: string): Promise<{
        type: import("generated/prisma").$Enums.TypeOfFilter;
        title: string;
        id: string;
        inputType: import("generated/prisma").$Enums.InputType;
    }>;
    getFiltersByCategoryId(categoryId: string): Promise<({
        filter: {
            values: {
                id: string;
                value: string;
                filterId: string;
            }[];
        } & {
            type: import("generated/prisma").$Enums.TypeOfFilter;
            title: string;
            id: string;
            inputType: import("generated/prisma").$Enums.InputType;
        };
    } & {
        id: string;
        categoryId: string;
        filterId: string;
    })[]>;
    createSpecificFilter(createSpecificDto: CreateSpecificFilterDto): Promise<import("./dto/return.dto").ReturnSpecificFunction>;
    findAllSpecificFilters(): Promise<{
        type: import("generated/prisma").$Enums.TypeOfFilter;
        title: string;
        id: string;
        inputType: import("generated/prisma").$Enums.InputType;
    }[]>;
    removeSpecific(id: string): Promise<{
        type: import("generated/prisma").$Enums.TypeOfFilter;
        title: string;
        id: string;
        inputType: import("generated/prisma").$Enums.InputType;
    }>;
    createValue(createValueDto: CreateFilterValue): Promise<{
        id: string;
        value: string;
        filterId: string;
    }[]>;
    removeValue(id: string): Promise<{
        id: string;
        value: string;
        filterId: string;
    }>;
}
