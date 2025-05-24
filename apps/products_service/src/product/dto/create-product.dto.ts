import {
  IsArray,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({ description: "Name of the product" })
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @ApiProperty({ description: "Product description", required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: "Price of the product" })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: "Quantity available" })
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    description: "Array of product image URLs",
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  product_images?: string[];

  @ApiProperty({ description: "Mongo ID of the category" })
  @IsNotEmpty()
  @IsMongoId()
  categoryId: string;

  @ApiProperty({ description: "Brand name" })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({ description: "Available colors", type: [String] })
  @IsArray()
  color: string[];
}
