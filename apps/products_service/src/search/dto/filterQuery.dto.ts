import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class FilterQueryDto {
  @IsArray()
  @IsOptional()
  color?: string[];

  @IsNumber()
  @IsOptional()
  starterPrice?: number;

  @IsNumber()
  @IsOptional()
  endOfPrice?: number;

  @IsArray()
  @IsOptional()
  brand?: string[];

  @IsString()
  @IsOptional()
  categoryId?: string;
}
