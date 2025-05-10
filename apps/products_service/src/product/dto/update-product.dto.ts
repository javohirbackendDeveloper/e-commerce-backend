import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";
import {
  IsArray,
  IsIn,
  IsInt,
  IsMongoId,
  IsOptional,
  IsString,
} from "class-validator";

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsOptional()
  product_name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  price?: number;

  @IsInt()
  @IsOptional()
  quantity?: number;

  @IsArray()
  @IsOptional()
  product_images?: string[];

  @IsMongoId()
  @IsOptional()
  categoryId?: string;
}
