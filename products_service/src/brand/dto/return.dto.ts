import { CreateBrandWithCategoryDto } from "./create-brand.dto";
import { ApiProperty } from "@nestjs/swagger";

export class BrandType {
  @ApiProperty({ example: "60c72b2f9b1d8c001c8f9c14", description: "Brend ID" })
  id: string;

  @ApiProperty({ example: "Apple", description: "Brend nomi" })
  name: string;
}

export class ReturnCreatedBrandCategory {
  @ApiProperty({ example: "Brand created successfully", description: "Xabar" })
  message: string;

  @ApiProperty({ type: BrandType })
  brand: BrandType;

  @ApiProperty({
    type: [CreateBrandWithCategoryDto],
    description: "Yaratilgan brend va kategoriyalar aloqalari ro'yxati",
  })
  createdRelations: CreateBrandWithCategoryDto[];
}

export class CategoryType {
  @ApiProperty({
    example: "60c72b2f9b1d8c001c8f9c20",
    description: "Kategoriya ID",
  })
  id: string;

  @ApiProperty({ example: "Electronics", description: "Kategoriya nomi" })
  title: string;

  @ApiProperty({
    example: null,
    description: "Ota kategoriya IDsi",
    nullable: true,
  })
  parentId: string | null;

  @ApiProperty({ example: "icon-url", description: "Kategoriya ikonkasi" })
  icon: string;

  @ApiProperty({ example: 3, description: "Bolalar kategoriyalar soni" })
  children: number;
}

export class ReturnFindAll {
  @ApiProperty({ type: BrandType })
  brand: BrandType;

  @ApiProperty({ type: CategoryType })
  category: CategoryType;
}
