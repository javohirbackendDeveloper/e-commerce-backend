"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const months_1 = require("./constants/months");
let DashboardService = class DashboardService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getYearProducts(query) {
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
            const monthlyDatas = {};
            for (const product of products) {
                const valueCreatedMonth = months_1.months[new Date(product.createdAt).getMonth()];
                if (monthlyDatas[valueCreatedMonth]) {
                    monthlyDatas[valueCreatedMonth] += 1;
                }
                else {
                    monthlyDatas[valueCreatedMonth] = 1;
                }
            }
            return monthlyDatas;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMonthproducts(query) {
        try {
            const { year, month } = query;
            const monthIndex = months_1.months.findIndex((item) => month.toString() === item) + 1;
            const startDate = new Date(`${year}-${monthIndex.toString().padStart(2, "0")}-01T00:00:00.000Z`);
            const endDate = new Date(`${year}-${(monthIndex + 1).toString().padStart(2, "0")}-01T00:00:00.000Z`);
            const products = await this.prismaService.product.findMany({
                where: {
                    createdAt: {
                        gte: startDate,
                        lte: endDate,
                    },
                },
            });
            const dailyDatas = {};
            for (const product of products) {
                const valueCreatedDay = new Date(product.createdAt).getDay();
                if (dailyDatas[valueCreatedDay]) {
                    dailyDatas[valueCreatedDay] += 1;
                }
                else {
                    dailyDatas[valueCreatedDay] = 1;
                }
            }
            return dailyDatas;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map