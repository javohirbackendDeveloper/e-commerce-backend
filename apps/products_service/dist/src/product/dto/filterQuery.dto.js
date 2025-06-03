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
exports.FilterQueryDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
class FilterQueryDto {
}
exports.FilterQueryDto = FilterQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filter by colors",
        type: [String],
        example: ["red", "blue"],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : [value])),
    __metadata("design:type", Array)
], FilterQueryDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Minimum price filter",
        type: Number,
        example: 1000,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterQueryDto.prototype, "starterPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Maximum price filter",
        type: Number,
        example: 5000,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterQueryDto.prototype, "endOfPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filter by brands",
        type: [String],
        example: ["Nike", "Adidas"],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : [value])),
    __metadata("design:type", Array)
], FilterQueryDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Category ID to filter products",
        type: String,
        example: "609e1297123abcd123456789",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Status of product",
        type: String,
        example: "Faol/Nofaol/Tugagan",
    }),
    (0, class_validator_1.IsEnum)(enums_1.ProductStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterQueryDto.prototype, "product_status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "filter of products",
        type: String,
        example: { Xotira: "32gb", Kamera: "12mp" },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        try {
            return typeof value === "string" ? JSON.parse(value) : value;
        }
        catch (_a) {
            return {};
        }
    }),
    __metadata("design:type", Object)
], FilterQueryDto.prototype, "filters", void 0);
//# sourceMappingURL=filterQuery.dto.js.map