import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";
import {
  IsArray,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsObject,
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
    description: "Mahsulotning eski narxi",
    type: Number,
    example: 15000,
  })
  @IsInt()
  @IsOptional()
  oldPrice?: number;

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
  @IsMongoId()
  @IsOptional()
  brandId: string;

  @ApiPropertyOptional({
    description: "Mahsulot ranglari",
    type: [String],
    example: ["qizil", "ko‘k"],
  })
  @IsArray()
  @IsOptional()
  color?: string[];

  @ApiPropertyOptional({
    description: "Dynamic filters",
    example: {
      xotira: "128GB",
      ekran: "6.1 inch",
    },
    type: Object,
  })
  @IsOptional()
  @IsObject()
  filters?: Record<string, string>;
}

export class ReduceQuantity {
  quantity: number;
  productId: string;
}
