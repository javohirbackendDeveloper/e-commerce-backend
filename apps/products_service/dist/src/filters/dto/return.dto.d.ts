import { FilterCategory } from "generated/prisma";
import { CreateGeneralFilterDto } from "./create-filter.dto";
export declare class ReturnSpecificFunction {
    filter: CreateGeneralFilterDto;
    createdFilterCategories: FilterCategory[];
}
