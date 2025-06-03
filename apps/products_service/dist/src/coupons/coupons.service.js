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
exports.CouponsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CouponsService = class CouponsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createCouponDto) {
        try {
            const { code, end_date } = createCouponDto;
            const existCode = await this.prismaService.coupon.findUnique({
                where: { code },
            });
            if (existCode) {
                throw new common_1.HttpException("This coupon code already exist", common_1.HttpStatus.BAD_REQUEST);
            }
            if (new Date(end_date).getTime() <= Date.now()) {
                throw new common_1.HttpException("End date must be later than now", common_1.HttpStatus.BAD_REQUEST);
            }
            const coupon = await this.prismaService.coupon.create({
                data: Object.assign({}, createCouponDto),
            });
            return coupon;
        }
        catch (err) {
            console.log({ err });
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const coupons = await this.prismaService.coupon.findMany();
            return coupons;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            return this.prismaService.coupon.findUnique({
                where: { id },
            });
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateCouponDto) {
        try {
            const coupon = await this.prismaService.coupon.update({
                where: { id },
                data: Object.assign({}, updateCouponDto),
            });
            return coupon;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const coupon = await this.prismaService.coupon.delete({
                where: { id },
            });
            return coupon;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CouponsService = CouponsService;
exports.CouponsService = CouponsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CouponsService);
//# sourceMappingURL=coupons.service.js.map