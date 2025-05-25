import { PartialType } from "@nestjs/mapped-types";
import { CreateBrandWithCategoryDto } from "./create-brand.dto";
import { IsMongoId, IsOptional, IsString } from "class-validator";

export class UpdateBrandDto extends PartialType(CreateBrandWithCategoryDto) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsMongoId({ each: true })
  @IsOptional()
  categoryId: string[];
}
