import {
  IsArray,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsArray()
  @IsOptional()
  product_images?: string[];

  @IsNotEmpty()
  @IsMongoId()
  categoryId: string;
}
