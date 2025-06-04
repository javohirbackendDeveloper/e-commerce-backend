import { PrismaService } from "prisma/prisma.service";
import { GetProductsByMonth, GetProductsByYear, MonthlyDataDto } from "./dto/getProductsByDate.dto";
export declare class DashboardService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getYearProducts(query: GetProductsByYear): Promise<MonthlyDataDto>;
    getMonthproducts(query: GetProductsByMonth): Promise<Record<string, number>>;
}
