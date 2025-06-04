import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import {
  GetProductsByMonth,
  GetProductsByYear,
  MonthlyDataDto,
} from "./dto/getProductsByDate.dto";
import { months } from "./constants/months";

@Injectable()
export class DashboardService {
  constructor(private readonly prismaService: PrismaService) {}

  async getYearProducts(query: GetProductsByYear) {
    try {
      const { year } = query;

      const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
      const endDate = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);

      const products = await this.prismaService.product.findMany({
        where: {
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      const monthlyDatas: MonthlyDataDto = {};

      for (const product of products) {
        const valueCreatedMonth =
          months[new Date(product.createdAt).getMonth()];

        if (monthlyDatas[valueCreatedMonth]) {
          monthlyDatas[valueCreatedMonth] += 1;
        } else {
          monthlyDatas[valueCreatedMonth] = 1;
        }
      }
      return monthlyDatas;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getMonthproducts(query: GetProductsByMonth) {
    try {
      const { year, month } = query;

      const monthIndex =
        months.findIndex((item) => month.toString() === item) + 1;

      const startDate = new Date(
        `${year}-${monthIndex.toString().padStart(2, "0")}-01T00:00:00.000Z`
      );
      const endDate = new Date(
        `${year}-${(monthIndex + 1).toString().padStart(2, "0")}-01T00:00:00.000Z`
      );

      const products = await this.prismaService.product.findMany({
        where: {
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      const dailyDatas: Record<string, number> = {};

      for (const product of products) {
        const valueCreatedDay = new Date(product.createdAt).getDay();

        if (dailyDatas[valueCreatedDay]) {
          dailyDatas[valueCreatedDay] += 1;
        } else {
          dailyDatas[valueCreatedDay] = 1;
        }
      }
      return dailyDatas;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
