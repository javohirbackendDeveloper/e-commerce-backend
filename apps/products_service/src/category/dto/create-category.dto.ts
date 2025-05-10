import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsOptional()
  parentId: string;
}
