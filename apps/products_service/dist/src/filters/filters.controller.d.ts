import { FiltersService } from "./filters.service";
import { CreateFilterValue, CreateGeneralFilterDto, CreateSpecificFilterDto } from "./dto/create-filter.dto";
import { UpdateFilterDto } from "./dto/update-filter.dto";
export declare class FiltersController {
    private readonly filtersService;
    constructor(filtersService: FiltersService);
    create(createGeneralFilterDto: CreateGeneralFilterDto): Promise<{
        title: string;
        inputType: import("generated/prisma").$Enums.InputType;
        type: import("generated/prisma").$Enums.TypeOfFilter;
        id: string;
    }>;
    findAll(): Promise<{
        title: string;
        inputType: import("generated/prisma").$Enums.InputType;
        type: import("generated/prisma").$Enums.TypeOfFilter;
        id: string;
    }[]>;
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
    update(id: string, updateFilterDto: UpdateFilterDto): Promise<{
        title: string;
        inputType: import("generated/prisma").$Enums.InputType;
        type: import("generated/prisma").$Enums.TypeOfFilter;
        id: string;
    }>;
    remove(id: string): Promise<{
        title: string;
        inputType: import("generated/prisma").$Enums.InputType;
        type: import("generated/prisma").$Enums.TypeOfFilter;
        id: string;
    }>;
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
    createSpecificFilter(createSpecificDto: CreateSpecificFilterDto): Promise<import("./dto/return.dto").ReturnSpecificFunction>;
    findAllSpecificFilters(): Promise<{
        title: string;
        inputType: import("generated/prisma").$Enums.InputType;
        type: import("generated/prisma").$Enums.TypeOfFilter;
        id: string;
    }[]>;
    removeSpecific(id: string): Promise<{
        title: string;
        inputType: import("generated/prisma").$Enums.InputType;
        type: import("generated/prisma").$Enums.TypeOfFilter;
        id: string;
    }>;
    createValue(createValueDto: CreateFilterValue): Promise<{
        id: string;
        filterId: string;
        value: string;
    }[]>;
    removeValue(id: string): Promise<{
        id: string;
        filterId: string;
        value: string;
    }>;
}
