import { BrandService } from "./brand.service";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { CreateBrandWithCategoryDto } from "./dto/create-brand.dto";
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    createBrandCategory(createBrandCategoryDto: CreateBrandWithCategoryDto): Promise<import("./dto/return.dto").ReturnCreatedBrandCategory>;
    findByCategoryId(id: string): Promise<any[]>;
    findAll(): Promise<({
        categories: ({
            category: {
                id: string;
                parentId: string | null;
                icon: string | null;
                title: string;
                children: number;
            };
        } & {
            id: string;
            categoryId: string;
            brandId: string;
        })[];
    } & {
        id: string;
        name: string;
    })[]>;
    findOne(id: string): void;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<import("./dto/return.dto").ReturnCreatedBrandCategory>;
    remove(id: string): Promise<import("./dto/return.dto").BrandType>;
}
