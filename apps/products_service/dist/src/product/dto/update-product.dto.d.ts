import { CreateProductDto } from "./create-product.dto";
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    product_name?: string;
    description?: string;
    oldPrice?: number;
    price?: number;
    quantity?: number;
    categoryId?: string;
    brandId: string;
    color?: string[];
    filters?: Record<string, string>;
}
export {};
