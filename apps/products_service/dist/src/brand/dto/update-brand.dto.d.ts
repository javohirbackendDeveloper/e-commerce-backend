import { CreateBrandWithCategoryDto } from "./create-brand.dto";
declare const UpdateBrandDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBrandWithCategoryDto>>;
export declare class UpdateBrandDto extends UpdateBrandDto_base {
    name?: string;
    categoryId: string[];
}
export {};
