import { Category } from "@prisma/client";
class SubCategoryDto {
  id: string;
  parentId: string;
  title: string;
  children: number;
}
export class ReturnParentWithSubDto {
  subCategories: SubCategoryDto[];
  id?: string;
  parentId?: string;
  icon?: string;
  title?: string;
  children?: number;
}
