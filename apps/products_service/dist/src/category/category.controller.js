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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    create(file, createCategoryDto) {
        return this.categoryService.create(createCategoryDto, file);
    }
    createSubCategory(createSubCategoryDto) {
        return this.categoryService.createSubCategory(createSubCategoryDto);
    }
    findAll() {
        return this.categoryService.findAll();
    }
    getAllLeafCategories() {
        return this.categoryService.getAllLeafCategories();
    }
    findAllParentCats() {
        return this.categoryService.findAllParentCats();
    }
    findAllParentsWithSubCats() {
        return this.categoryService.findAllParentsWithSubCats();
    }
    findOne(id) {
        return this.categoryService.findOne(id);
    }
    update(id, updateCategoryDto, file) {
        return this.categoryService.update(id, updateCategoryDto, file);
    }
    remove(id) {
        console.log({ id }, "Id came");
        return this.categoryService.remove(id);
    }
    findAllChildCatsByParentid(id) {
        return this.categoryService.getAllChildCategories(id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("icon")),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: "Create a new category" }),
    (0, swagger_1.ApiBody)({ type: create_category_dto_1.CreateCategoryDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Kategoriya yaratildi" }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("createSubCategory"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: "Create a sub categorycategory" }),
    (0, swagger_1.ApiBody)({ type: create_category_dto_1.CreateSubCategoryDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Kategoriya yaratildi" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateSubCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "createSubCategory", null);
__decorate([
    (0, common_1.Get)("findAll"),
    (0, swagger_1.ApiOperation)({ summary: "Get all categories including subcategories" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Barcha kategoriyalar",
        type: [create_category_dto_1.CreateCategoryDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("getLeafCategories"),
    (0, swagger_1.ApiOperation)({ summary: "Get all leaf subcategories" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Barcha eng pastki bosqich kategoriyalar",
        type: [create_category_dto_1.CreateCategoryDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getAllLeafCategories", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all parent categories (root categories only)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Faqat ota kategoriyalar",
        type: [create_category_dto_1.CreateCategoryDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAllParentCats", null);
__decorate([
    (0, common_1.Get)("getParentsWithSub"),
    (0, swagger_1.ApiOperation)({ summary: "Get all parent categories with second categories" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Faqat ota va ikkinchi darajali kategoriyalar",
        type: [create_category_dto_1.CreateCategoryDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAllParentsWithSubCats", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get a single category by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kategoriya ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Topilgan kategoriya",
        type: create_category_dto_1.CreateCategoryDto,
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("icon")),
    (0, swagger_1.ApiOperation)({ summary: "Update a category" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kategoriya ID" }),
    (0, swagger_1.ApiBody)({ type: update_category_dto_1.UpdateCategoryDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Kategoriya yangilandi",
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto, Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a category" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kategoriya ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Kategoriya o‘chirildi",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)("findAllChildCategories/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Get all parent categories (root categories only)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Shu parent categoryni ikkinchi darajali kategoriyalari",
        type: [create_category_dto_1.CreateCategoryDto],
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAllChildCatsByParentid", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)("products_service/category"),
    (0, common_1.Controller)("category"),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map