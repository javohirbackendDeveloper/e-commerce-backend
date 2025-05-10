import { PartialType } from "@nestjs/mapped-types";
import { CreateCategoryDto } from "./create-category.dto";
import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString()
  @IsOptional()
  @MinLength(3)
  title?: string;
}
