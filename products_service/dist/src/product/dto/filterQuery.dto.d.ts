import { ProductStatus } from "../enums";
export declare class FilterQueryDto {
    color?: string[];
    starterPrice?: number;
    endOfPrice?: number;
    brand?: string[];
    categoryId?: string;
    product_status?: ProductStatus;
    filters?: Record<string, string>;
}
