import { FilterCategory } from "@prisma/client";
import { CreateGeneralFilterDto } from "./create-filter.dto";

export class ReturnSpecificFunction {
  filter: CreateGeneralFilterDto;
  createdFilterCategories: FilterCategory[];
}
