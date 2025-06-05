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
exports.ReturnParentWithSubDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SubCategoryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "60c72b2f9b1d8c001c8f9c21",
        description: "Subkategoriya ID",
    }),
    __metadata("design:type", String)
], SubCategoryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "60c72b2f9b1d8c001c8f9c20",
        description: "Parent kategoriya ID",
    }),
    __metadata("design:type", String)
], SubCategoryDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Smartphones", description: "Subkategoriya nomi" }),
    __metadata("design:type", String)
], SubCategoryDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, description: "Subkategoriya bolalari soni" }),
    __metadata("design:type", Number)
], SubCategoryDto.prototype, "children", void 0);
class ReturnParentWithSubDto {
}
exports.ReturnParentWithSubDto = ReturnParentWithSubDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [SubCategoryDto],
        description: "Subkategoriya ro'yxati",
    }),
    __metadata("design:type", Array)
], ReturnParentWithSubDto.prototype, "subCategories", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: "60c72b2f9b1d8c001c8f9c20",
        description: "Parent kategoriya ID",
    }),
    __metadata("design:type", String)
], ReturnParentWithSubDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: null,
        description: "Parent kategoriya ota IDsi",
        nullable: true,
    }),
    __metadata("design:type", String)
], ReturnParentWithSubDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: "icon-url",
        description: "Kategoriya ikonkasi",
    }),
    __metadata("design:type", String)
], ReturnParentWithSubDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: "Electronics",
        description: "Kategoriya nomi",
    }),
    __metadata("design:type", String)
], ReturnParentWithSubDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 3,
        description: "Bolalar kategoriyalar soni",
    }),
    __metadata("design:type", Number)
], ReturnParentWithSubDto.prototype, "children", void 0);
//# sourceMappingURL=return.dto.js.map