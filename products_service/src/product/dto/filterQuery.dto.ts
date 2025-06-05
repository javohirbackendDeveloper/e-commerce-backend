import {
  IsArray,
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { ProductStatus } from "../enums";

export class FilterQueryDto {
  @ApiPropertyOptional({
    description: "Filter by colors",
    type: [String],
    example: ["red", "blue"],
  })
  @IsArray()
  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  color?: string[];

  @ApiPropertyOptional({
    description: "Minimum price filter",
    type: Number,
    example: 1000,
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  starterPrice?: number;

  @ApiPropertyOptional({
    description: "Maximum price filter",
    type: Number,
    example: 5000,
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  endOfPrice?: number;

  @ApiPropertyOptional({
    description: "Filter by brands",
    type: [String],
    example: ["Nike", "Adidas"],
  })
  @IsArray()
  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  brand?: string[];

  @ApiPropertyOptional({
    description: "Category ID to filter products",
    type: String,
    example: "609e1297123abcd123456789",
  })
  @IsString()
  @IsOptional()
  categoryId?: string;

  @ApiPropertyOptional({
    description: "Status of product",
    type: String,
    example: "Faol/Nofaol/Tugagan",
  })
  @IsEnum(ProductStatus)
  @IsOptional()
  product_status?: ProductStatus;

  @ApiPropertyOptional({
    description: "filter of products",
    type: String,
    example: { Xotira: "32gb", Kamera: "12mp" },
  })
  @IsOptional()
  @Transform(({ value }) => {
    try {
      return typeof value === "string" ? JSON.parse(value) : value;
    } catch {
      return {};
    }
  })
  filters?: Record<string, string>;
}
