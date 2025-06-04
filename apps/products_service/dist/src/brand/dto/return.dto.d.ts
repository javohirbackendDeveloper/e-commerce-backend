import { CreateBrandWithCategoryDto } from "./create-brand.dto";
export declare class BrandType {
    id: string;
    name: string;
}
export declare class ReturnCreatedBrandCategory {
    message: string;
    brand: BrandType;
    createdRelations: CreateBrandWithCategoryDto[];
}
export declare class CategoryType {
    id: string;
    title: string;
    parentId: string | null;
    icon: string;
    children: number;
}
export declare class ReturnFindAll {
    brand: BrandType;
    category: CategoryType;
}
