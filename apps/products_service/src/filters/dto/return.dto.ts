import { FilterCategory } from "generated/prisma";
import { CreateGeneralFilterDto } from "./create-filter.dto";

export class ReturnSpecificFunction {
  filter: CreateGeneralFilterDto;
  createdFilterCategories: FilterCategory[];
}
