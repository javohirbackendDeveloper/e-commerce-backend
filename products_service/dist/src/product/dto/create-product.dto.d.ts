export declare class CreateProductDto {
    product_name: string;
    description?: string;
    price: number;
    oldPrice: number;
    quantity: number;
    categoryId: string;
    brandId: string;
    color: string[];
    product_images: string[];
    filters: Record<string, string>;
}
