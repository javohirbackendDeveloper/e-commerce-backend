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
exports.MonthlyDataDto = exports.GetProductsByMonth = exports.GetProductsByYear = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const month_enum_1 = require("../enums/month.enum");
class GetProductsByYear {
}
exports.GetProductsByYear = GetProductsByYear;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is used to get Products by year",
        example: "2025",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], GetProductsByYear.prototype, "year", void 0);
class GetProductsByMonth {
}
exports.GetProductsByMonth = GetProductsByMonth;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is used to get Products by month",
        example: "2025",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], GetProductsByMonth.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is used to get Products by month",
        example: "fevral",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(month_enum_1.MonthsEnum),
    __metadata("design:type", Number)
], GetProductsByMonth.prototype, "month", void 0);
const class_validator_2 = require("class-validator");
class MonthlyDataDto {
}
exports.MonthlyDataDto = MonthlyDataDto;
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "yanvar", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "fevral", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "mart", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "aprel", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "may", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "iyun", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "iyul", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "avgust", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "sentabr", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "oktabr", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "noyabr", void 0);
__decorate([
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Number)
], MonthlyDataDto.prototype, "dekabr", void 0);
//# sourceMappingURL=getProductsByDate.dto.js.map