import { Category } from "generated/prisma";

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
