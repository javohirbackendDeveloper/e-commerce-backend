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
exports.UpdateCouponDto = exports.CouponStatus = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_coupon_dto_1 = require("./create-coupon.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var CouponStatus;
(function (CouponStatus) {
    CouponStatus["FAOL"] = "FAOL";
    CouponStatus["NOFAOL"] = "NOFAOL";
})(CouponStatus || (exports.CouponStatus = CouponStatus = {}));
class UpdateCouponDto extends (0, mapped_types_1.PartialType)(create_coupon_dto_1.CreateCouponDto) {
    constructor() {
        super(...arguments);
        this.status = CouponStatus.FAOL;
    }
}
exports.UpdateCouponDto = UpdateCouponDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Kupon kodi",
        example: "SUMMER2025",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCouponDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Chegirma miqdori",
        example: 15,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCouponDto.prototype, "discount_value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Minimal buyurtma summasi uchun chegirma amal qiladi",
        example: 100,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateCouponDto.prototype, "min_order_amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Kupondan foydalanish limitlari soni",
        example: 10,
        minimum: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCouponDto.prototype, "usage_limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Kupon amal qilish muddati oxiri",
        example: "2025-12-31T23:59:59Z",
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCouponDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Kupon holati",
        enum: CouponStatus,
        default: CouponStatus.FAOL,
    }),
    (0, class_validator_1.IsEnum)(CouponStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCouponDto.prototype, "status", void 0);
//# sourceMappingURL=update-coupon.dto.js.map