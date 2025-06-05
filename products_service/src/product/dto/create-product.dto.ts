import {
  IsArray,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsObject,
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

  @ApiProperty({ description: "old price of the product" })
  @IsNumber()
  @IsNotEmpty()
  oldPrice: number;

  @ApiProperty({ description: "Quantity available" })
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    description: "Array of product image URLs",
    required: false,
    type: [String],
  })
  @ApiProperty({ description: "Mongo ID of the category" })
  @IsNotEmpty()
  @IsMongoId()
  categoryId: string;

  @ApiProperty({ description: "Brand id" })
  @IsMongoId()
  @IsNotEmpty()
  brandId: string;

  @ApiProperty({ description: "Available colors", type: [String] })
  @IsArray()
  color: string[];

  @ApiProperty({
    description: "Image urls , that are already uploaded to the cloudinary",
    type: [String],
  })
  @IsArray()
  product_images: string[];

  @ApiProperty({
    description: "Dynamic filters",
    example: {
      xotira: "128GB",
      ekran: "6.1 inch",
    },
    type: Object,
  })
  @IsObject()
  filters: Record<string, string>;
}
