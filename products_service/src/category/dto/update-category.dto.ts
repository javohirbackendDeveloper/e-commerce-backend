import { PartialType } from "@nestjs/mapped-types";
import { CreateCategoryDto } from "./create-category.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @ApiPropertyOptional({
    example: "Yangilangan Kategoriya",
    description: "Kategoriya nomi",
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  title?: string;
}
