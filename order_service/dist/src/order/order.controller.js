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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const create_order_dto_1 = require("./dto/create-order.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const getOrderByDate_dto_1 = require("./dto/getOrderByDate.dto");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    create(req, dto) {
        return this.orderService.create(dto, req);
    }
    getUserOrders(query, req) {
        return this.orderService.getUserOrders(query, req);
    }
    update(req, id, dto) {
        return this.orderService.update(id, dto, req);
    }
    findPunktOrders(query, req) {
        return this.orderService.getPunktOrders(query, req);
    }
    updateForPunktAdmin(req, id, dto) {
        return this.orderService.updatOrdersForPunktAdmin(id, dto, req);
    }
    getAllOrders(query, req) {
        return this.orderService.getAllOrders(query);
    }
    getYearOrders(query) {
        return this.orderService.getYearOrders(query);
    }
    getMonthOrders(query) {
        return this.orderService.getMonthOrders(query);
    }
    async keepHealthServer(res) {
        return this.orderService.keepHealthServer(res);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)("user"),
    (0, swagger_1.ApiOperation)({ summary: "Yangi buyurtma yaratish (foydalanuvchi)" }),
    (0, swagger_1.ApiBody)({ type: create_order_dto_1.CreateOrderDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Buyurtma yaratildi" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("user"),
    (0, swagger_1.ApiOperation)({ summary: "Foydalanuvchining buyurtmalari ro'yxati" }),
    (0, swagger_1.ApiQuery)({ name: "status", required: false }),
    (0, swagger_1.ApiQuery)({ name: "punktId", required: false }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Buyurtmalar olindi" }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getUserOrders", null);
__decorate([
    (0, common_1.Patch)("user/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Buyurtmani yangilash (foydalanuvchi)" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Buyurtma ID" }),
    (0, swagger_1.ApiBody)({ type: update_order_dto_1.UpdateOrderDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Buyurtma yangilandi" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("punkt"),
    (0, swagger_1.ApiOperation)({ summary: "Punkt buyurtmalari (punkt admin)" }),
    (0, swagger_1.ApiQuery)({ name: "status", required: false }),
    (0, swagger_1.ApiQuery)({ name: "userId", required: false }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Punktdagi buyurtmalar olindi" }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findPunktOrders", null);
__decorate([
    (0, common_1.Patch)("punkt/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Buyurtmani yangilash (punkt admin)" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Buyurtma ID" }),
    (0, swagger_1.ApiBody)({ type: update_order_dto_1.UpdateOrderDtoForPunktAdmin }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Buyurtma yangilandi" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_order_dto_1.UpdateOrderDtoForPunktAdmin]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "updateForPunktAdmin", null);
__decorate([
    (0, common_1.Get)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Barcha buyurtmalar (admin)" }),
    (0, swagger_1.ApiQuery)({ name: "status", required: false }),
    (0, swagger_1.ApiQuery)({ name: "punktId", required: false }),
    (0, swagger_1.ApiQuery)({ name: "userId", required: false }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Buyurtmalar ro'yxati" }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Get)("admin/getYearOrders"),
    (0, swagger_1.ApiOperation)({ summary: "Bir yillik barcha buyurtmalar (admin)" }),
    (0, swagger_1.ApiQuery)({ name: "year", required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Bir yillik buyurtmalar ro'yxati" }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getOrderByDate_dto_1.GetOrdersByYear]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getYearOrders", null);
__decorate([
    (0, common_1.Get)("admin/getMonthOrders"),
    (0, swagger_1.ApiOperation)({ summary: "Bir oylik barcha buyurtmalar (admin)" }),
    (0, swagger_1.ApiQuery)({ name: "month", required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Bir oylik buyurtmalar ro'yxati" }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getOrderByDate_dto_1.GetOrdersByMonth]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getMonthOrders", null);
__decorate([
    (0, common_1.Get)("keepHealthServer"),
    (0, swagger_1.ApiOperation)({ summary: "Keep server from auto sleep" }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "keepHealthServer", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)("Buyurtmalar"),
    (0, common_1.Controller)("order"),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map