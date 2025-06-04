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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
const swagger_1 = require("@nestjs/swagger");
const getProductsByDate_dto_1 = require("./dto/getProductsByDate.dto");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    getYearOrders(query) {
        return this.dashboardService.getYearProducts(query);
    }
    getMonthProducts(query) {
        return this.dashboardService.getMonthproducts(query);
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)("admin/getYearProducts"),
    (0, swagger_1.ApiOperation)({ summary: "Bir yillik barcha qo'shilgan mahsulotlar (admin)" }),
    (0, swagger_1.ApiQuery)({ name: "year", required: true }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Bir yillik qo'shilgan mahsulotlar ro'yxati",
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getProductsByDate_dto_1.GetProductsByYear]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getYearOrders", null);
__decorate([
    (0, common_1.Get)("admin/getMonthProducts"),
    (0, swagger_1.ApiOperation)({ summary: "Bir oylik barcha mahsulotlar (admin)" }),
    (0, swagger_1.ApiQuery)({ name: "month", required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Bir oylik mahsulotlar soni" }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getProductsByDate_dto_1.GetProductsByMonth]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getMonthProducts", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)("dashboard"),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map