import { CreateBrandWithCategoryDto } from "./create-brand.dto";

export type BrandType = {
  id: String;
  name: String;
};

export class ReturnCreatedBrandCategory {
  message: string;
  brand: BrandType;
  createdRelations: CreateBrandWithCategoryDto[];
}

export class ReturnFindAll {
  brand: BrandType;
  category: {
    id: string;
    title: string;
    parentId: string;
    icon: string;
    children: number;
  };
}
