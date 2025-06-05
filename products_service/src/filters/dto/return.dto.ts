import { FilterCategory } from "@prisma/client";
import { CreateGeneralFilterDto } from "./create-filter.dto";
import { ApiProperty } from "@nestjs/swagger";

export class ReturnSpecificFunction {
  @ApiProperty({ type: () => CreateGeneralFilterDto })
  filter: CreateGeneralFilterDto;

  @ApiProperty({
    type: [Object],
    description: "Yaratilgan filter kategoriyalar ro'yxati",
  })
  createdFilterCategories: FilterCategory[];
}
