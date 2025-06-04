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
exports.CreateCouponDto = exports.CouponStatus = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
var CouponStatus;
(function (CouponStatus) {
    CouponStatus["FAOL"] = "FAOL";
    CouponStatus["NOFAOL"] = "NOFAOL";
})(CouponStatus || (exports.CouponStatus = CouponStatus = {}));
class CreateCouponDto {
    constructor() {
        this.status = CouponStatus.FAOL;
    }
}
exports.CreateCouponDto = CreateCouponDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Kupon kodi",
        example: "SUMMER2025",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Chegirma miqdori",
        example: 15,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCouponDto.prototype, "discount_value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Minimal buyurtma summasi uchun chegirma amal qiladi",
        example: 100,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCouponDto.prototype, "min_order_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Kupondan foydalanish limitlari soni",
        example: 10,
        minimum: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateCouponDto.prototype, "usage_limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Kupon amal qilish muddati oxiri",
        example: "2025-12-31T23:59:59Z",
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Kupon holati",
        enum: CouponStatus,
        default: CouponStatus.FAOL,
    }),
    (0, class_validator_1.IsEnum)(CouponStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "status", void 0);
//# sourceMappingURL=create-coupon.dto.js.map