import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  product_name: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  quantity: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  product_images?: string[];
}
