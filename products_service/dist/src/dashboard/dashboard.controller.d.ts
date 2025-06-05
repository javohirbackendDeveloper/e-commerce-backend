import { DashboardService } from "./dashboard.service";
import { GetProductsByMonth, GetProductsByYear } from "./dto/getProductsByDate.dto";
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getYearOrders(query: GetProductsByYear): Promise<import("./dto/getProductsByDate.dto").MonthlyDataDto>;
    getMonthProducts(query: GetProductsByMonth): Promise<Record<string, number>>;
}
