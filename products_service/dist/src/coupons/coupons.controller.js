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
exports.CouponsController = void 0;
const common_1 = require("@nestjs/common");
const coupons_service_1 = require("./coupons.service");
const create_coupon_dto_1 = require("./dto/create-coupon.dto");
const update_coupon_dto_1 = require("./dto/update-coupon.dto");
const swagger_1 = require("@nestjs/swagger");
const useCoupon_dto_1 = require("./dto/useCoupon.dto");
let CouponsController = class CouponsController {
    constructor(couponsService) {
        this.couponsService = couponsService;
    }
    create(createCouponDto) {
        return this.couponsService.create(createCouponDto);
    }
    findAll() {
        return this.couponsService.findAll();
    }
    findByCode(data) {
        return this.couponsService.findByCode(data);
    }
    findOne(id) {
        return this.couponsService.findOne(id);
    }
    update(id, updateCouponDto) {
        return this.couponsService.update(id, updateCouponDto);
    }
    remove(id) {
        return this.couponsService.remove(id);
    }
};
exports.CouponsController = CouponsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Yangi kupon yaratish" }),
    (0, swagger_1.ApiBody)({ type: create_coupon_dto_1.CreateCouponDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Kupon yaratildi" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_dto_1.CreateCouponDto]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Barcha kuponlarni olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kuponlar ro'yxati" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("findByCode"),
    (0, swagger_1.ApiOperation)({ summary: "Bitta kuponni code orqali olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kupon by code" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [useCoupon_dto_1.UseCouponDto]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "findByCode", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha kuponni olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kupon ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kupon ma'lumotlari" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Kuponni yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kupon ID" }),
    (0, swagger_1.ApiBody)({ type: update_coupon_dto_1.UpdateCouponDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kupon yangilandi" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_coupon_dto_1.UpdateCouponDto]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Kuponni o‘chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kupon ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kupon o‘chirildi" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "remove", null);
exports.CouponsController = CouponsController = __decorate([
    (0, swagger_1.ApiTags)("products_service/coupon"),
    (0, common_1.Controller)("coupon"),
    __metadata("design:paramtypes", [coupons_service_1.CouponsService])
], CouponsController);
//# sourceMappingURL=coupons.controller.js.map