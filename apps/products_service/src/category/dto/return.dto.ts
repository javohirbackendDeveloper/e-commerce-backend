import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Category } from "@prisma/client";

class SubCategoryDto {
  @ApiProperty({
    example: "60c72b2f9b1d8c001c8f9c21",
    description: "Subkategoriya ID",
  })
  id: string;

  @ApiProperty({
    example: "60c72b2f9b1d8c001c8f9c20",
    description: "Parent kategoriya ID",
  })
  parentId: string;

  @ApiProperty({ example: "Smartphones", description: "Subkategoriya nomi" })
  title: string;

  @ApiProperty({ example: 0, description: "Subkategoriya bolalari soni" })
  children: number;
}

export class ReturnParentWithSubDto {
  @ApiProperty({
    type: [SubCategoryDto],
    description: "Subkategoriya ro'yxati",
  })
  subCategories: SubCategoryDto[];

  @ApiPropertyOptional({
    example: "60c72b2f9b1d8c001c8f9c20",
    description: "Parent kategoriya ID",
  })
  id?: string;

  @ApiPropertyOptional({
    example: null,
    description: "Parent kategoriya ota IDsi",
    nullable: true,
  })
  parentId?: string;

  @ApiPropertyOptional({
    example: "icon-url",
    description: "Kategoriya ikonkasi",
  })
  icon?: string;

  @ApiPropertyOptional({
    example: "Electronics",
    description: "Kategoriya nomi",
  })
  title?: string;

  @ApiPropertyOptional({
    example: 3,
    description: "Bolalar kategoriyalar soni",
  })
  children?: number;
}
