import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";
import {
  IsArray,
  IsInt,
  IsMongoId,
  IsOptional,
  IsString,
} from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({ description: "Mahsulot nomi", type: String })
  @IsString()
  @IsOptional()
  product_name?: string;

  @ApiPropertyOptional({ description: "Mahsulot tavsifi", type: String })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: "Mahsulot narxi",
    type: Number,
    example: 10000,
  })
  @IsInt()
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({
    description: "Mahsulot miqdori",
    type: Number,
    example: 5,
  })
  @IsInt()
  @IsOptional()
  quantity?: number;

  @ApiPropertyOptional({
    description: "Mahsulot suratlari ro'yxati",
    type: [String],
    example: ["img1.jpg", "img2.jpg"],
  })
  @IsArray()
  @IsOptional()
  product_images?: string[];

  @ApiPropertyOptional({
    description: "Kategoriya ID si",
    type: String,
    example: "609e1297123abcd123456789",
  })
  @IsMongoId()
  @IsOptional()
  categoryId?: string;

  @ApiPropertyOptional({
    description: "Brend nomi",
    type: String,
    example: "Nike",
  })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiPropertyOptional({
    description: "Mahsulot ranglari",
    type: [String],
    example: ["qizil", "ko‘k"],
  })
  @IsArray()
  @IsOptional()
  color?: string[];
}
