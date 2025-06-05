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
exports.ReturnFindAll = exports.CategoryType = exports.ReturnCreatedBrandCategory = exports.BrandType = void 0;
const create_brand_dto_1 = require("./create-brand.dto");
const swagger_1 = require("@nestjs/swagger");
class BrandType {
}
exports.BrandType = BrandType;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "60c72b2f9b1d8c001c8f9c14", description: "Brend ID" }),
    __metadata("design:type", String)
], BrandType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Apple", description: "Brend nomi" }),
    __metadata("design:type", String)
], BrandType.prototype, "name", void 0);
class ReturnCreatedBrandCategory {
}
exports.ReturnCreatedBrandCategory = ReturnCreatedBrandCategory;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Brand created successfully", description: "Xabar" }),
    __metadata("design:type", String)
], ReturnCreatedBrandCategory.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: BrandType }),
    __metadata("design:type", BrandType)
], ReturnCreatedBrandCategory.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [create_brand_dto_1.CreateBrandWithCategoryDto],
        description: "Yaratilgan brend va kategoriyalar aloqalari ro'yxati",
    }),
    __metadata("design:type", Array)
], ReturnCreatedBrandCategory.prototype, "createdRelations", void 0);
class CategoryType {
}
exports.CategoryType = CategoryType;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "60c72b2f9b1d8c001c8f9c20",
        description: "Kategoriya ID",
    }),
    __metadata("design:type", String)
], CategoryType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Electronics", description: "Kategoriya nomi" }),
    __metadata("design:type", String)
], CategoryType.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: null,
        description: "Ota kategoriya IDsi",
        nullable: true,
    }),
    __metadata("design:type", String)
], CategoryType.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "icon-url", description: "Kategoriya ikonkasi" }),
    __metadata("design:type", String)
], CategoryType.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: "Bolalar kategoriyalar soni" }),
    __metadata("design:type", Number)
], CategoryType.prototype, "children", void 0);
class ReturnFindAll {
}
exports.ReturnFindAll = ReturnFindAll;
__decorate([
    (0, swagger_1.ApiProperty)({ type: BrandType }),
    __metadata("design:type", BrandType)
], ReturnFindAll.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CategoryType }),
    __metadata("design:type", CategoryType)
], ReturnFindAll.prototype, "category", void 0);
//# sourceMappingURL=return.dto.js.map