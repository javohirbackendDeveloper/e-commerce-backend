import { Controller, Get, Query } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { ApiOperation, ApiQuery, ApiResponse } from "@nestjs/swagger";
import {
  GetProductsByMonth,
  GetProductsByYear,
} from "./dto/getProductsByDate.dto";

@Controller("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get("admin/getYearProducts")
  @ApiOperation({ summary: "Bir yillik barcha qo'shilgan mahsulotlar (admin)" })
  @ApiQuery({ name: "year", required: true })
  @ApiResponse({
    status: 200,
    description: "Bir yillik qo'shilgan mahsulotlar ro'yxati",
  })
  getYearOrders(@Query() query: GetProductsByYear) {
    return this.dashboardService.getYearProducts(query);
  }

  @Get("admin/getMonthProducts")
  @ApiOperation({ summary: "Bir oylik barcha mahsulotlar (admin)" })
  @ApiQuery({ name: "month", required: true })
  @ApiResponse({ status: 200, description: "Bir oylik mahsulotlar soni" })
  getMonthProducts(@Query() query: GetProductsByMonth) {
    return this.dashboardService.getMonthproducts(query);
  }
}
