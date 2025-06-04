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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const update_brand_dto_1 = require("./dto/update-brand.dto");
const create_brand_dto_1 = require("./dto/create-brand.dto");
const swagger_1 = require("@nestjs/swagger");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    createBrandCategory(dto) {
        return this.brandService.createBrandWithCategory(dto);
    }
    findByCategoryId(id) {
        return this.brandService.findByCategoryId(id);
    }
    findAll() {
        return this.brandService.findAll();
    }
    findOne(id) {
        return this.brandService.findOne(+id);
    }
    update(id, dto) {
        return this.brandService.update(id, dto);
    }
    remove(id) {
        return this.brandService.remove(id);
    }
};
exports.BrandController = BrandController;
__decorate([
    (0, common_1.Post)("createBrandCategory"),
    (0, swagger_1.ApiOperation)({ summary: "Create brand with category" }),
    (0, swagger_1.ApiBody)({ type: create_brand_dto_1.CreateBrandWithCategoryDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Brand with category created" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid input data" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_dto_1.CreateBrandWithCategoryDto]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "createBrandCategory", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Find brands by category ID" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Category ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Brands retrieved" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Category not found" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "findByCategoryId", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all brands" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "All brands retrieved" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("findOne/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Find one brand by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Brand ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Brand retrieved" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Brand not found" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update a brand" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Brand ID" }),
    (0, swagger_1.ApiBody)({ type: update_brand_dto_1.UpdateBrandDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Brand updated" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid input data" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Brand not found" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_brand_dto_1.UpdateBrandDto]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a brand" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Brand ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Brand deleted" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Brand not found" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "remove", null);
exports.BrandController = BrandController = __decorate([
    (0, swagger_1.ApiTags)("Brand"),
    (0, common_1.Controller)("brand"),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
//# sourceMappingURL=brand.controller.js.map