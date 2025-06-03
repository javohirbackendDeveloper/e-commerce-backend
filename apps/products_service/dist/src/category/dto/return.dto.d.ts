declare class SubCategoryDto {
    id: string;
    parentId: string;
    title: string;
    children: number;
}
export declare class ReturnParentWithSubDto {
    subCategories: SubCategoryDto[];
    id?: string;
    parentId?: string;
    icon?: string;
    title?: string;
    children?: number;
}
export {};
