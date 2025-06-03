import { ProductService } from "../product/product.service";
import { PrismaService } from "prisma/prisma.service";
export declare class SearchService {
    private readonly prismaService;
    private readonly productService;
    private readonly index;
    constructor(prismaService: PrismaService, productService: ProductService);
}
