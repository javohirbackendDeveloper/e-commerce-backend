import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateCategoryDto {
  @ApiProperty({ example: "Elektronika", description: "Kategoriya nomi" })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
}
export class CreateSubCategoryDto {
  @ApiProperty({ example: "Elektronika", description: "Kategoriya nomi" })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @ApiProperty({
    example: "3245678977657867987",
    description: "Ota kategoriya idsi ",
  })
  @IsString()
  @IsNotEmpty()
  parentId: string;
}
