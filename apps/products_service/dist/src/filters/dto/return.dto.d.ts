import { FilterCategory } from "@prisma/client";
import { CreateGeneralFilterDto } from "./create-filter.dto";
export declare class ReturnSpecificFunction {
    filter: CreateGeneralFilterDto;
    createdFilterCategories: FilterCategory[];
}
