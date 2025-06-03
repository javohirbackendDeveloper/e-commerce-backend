import { PartialType } from "@nestjs/mapped-types";
import { CreateBrandWithCategoryDto } from "./create-brand.dto";
import { IsMongoId, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateBrandDto extends PartialType(CreateBrandWithCategoryDto) {
  @ApiPropertyOptional({ example: "Apple", description: "Brend nomi" })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    type: [String],
    example: ["60c72b2f9b1d8c001c8f9c14", "60c72b2f9b1d8c001c8f9c15"],
    description: "Kategoriya ID larining ro'yxati",
  })
  @IsMongoId({ each: true })
  @IsOptional()
  categoryId?: string[];
}
