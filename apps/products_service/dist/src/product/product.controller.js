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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const filterQuery_dto_1 = require("./dto/filterQuery.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    createImages(product_images) {
        return this.productService.createImage(product_images);
    }
    create(createProductDto) {
        console.log("Request came to create product api", createProductDto);
        return this.productService.create(createProductDto);
    }
    findAll(limit, page) {
        const pageNumber = parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 10;
        return this.productService.findAll(pageNumber, limitNumber);
    }
    findOne(id) {
        return this.productService.findOne(id);
    }
    getAllProductsByCategory(categoryId, filter) {
        return this.productService.getAllProductsByCategory(categoryId, filter);
    }
    update(id, updateProductDto) {
        return this.productService.update(id, updateProductDto);
    }
    remove(id) {
        return this.productService.remove(id);
    }
    deleteProductImage(id) {
        return this.productService.deleteOneImage(id);
    }
    uploadOneImage(file, productId) {
        return this.productService.uploadOneImage(file, productId);
    }
    getMinMaxPrices() {
        return this.productService.getMinMaxPrices();
    }
    async filterProducts(filter, products) {
        return this.productService.filterProducts(products, filter);
    }
    async getProductByIds(productIds) {
        return this.productService.getProductsByIds(productIds);
    }
    async getOneProductById(productId) {
        return this.productService.findOne(productId);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)("createImages"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("product_images", 5)),
    (0, swagger_1.ApiOperation)({ summary: "Create a new product" }),
    (0, swagger_1.ApiBody)({ type: create_product_dto_1.CreateProductDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Product created successfully" }),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createImages", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new product" }),
    (0, swagger_1.ApiBody)({ type: create_product_dto_1.CreateProductDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Product created successfully" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all products" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of products" }),
    __param(0, (0, common_1.Query)("limit")),
    __param(1, (0, common_1.Query)("page")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get a product by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Product ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Product details" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("/getProductByCategory/:categoryId"),
    (0, swagger_1.ApiOperation)({ summary: "Get products by category ID" }),
    (0, swagger_1.ApiParam)({ name: "categoryId", description: "Category ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Products of category" }),
    __param(0, (0, common_1.Param)("categoryId")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, filterQuery_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllProductsByCategory", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update a product by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Product ID" }),
    (0, swagger_1.ApiBody)({ type: update_product_dto_1.UpdateProductDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Product updated successfully" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a product by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Product ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Product deleted successfully" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)("image/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a product image by id" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Product image ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Product image deleted successfully",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "deleteProductImage", null);
__decorate([
    (0, common_1.Post)("uploadImage"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("product_images")),
    (0, swagger_1.ApiOperation)({ summary: "Upload image for product" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Product image url" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Product image uploaded successfully",
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "uploadOneImage", null);
__decorate([
    (0, common_1.Get)("/prices/getMinMaxPrices"),
    (0, swagger_1.ApiOperation)({ summary: "Get min and max prices" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getMinMaxPrices", null);
__decorate([
    (0, common_1.Get)("filter"),
    (0, swagger_1.ApiOperation)({ summary: "Filter products with various parameters" }),
    (0, swagger_1.ApiBody)({ type: filterQuery_dto_1.FilterQueryDto }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filterQuery_dto_1.FilterQueryDto, Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "filterProducts", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_products"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductByIds", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_cart_product"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getOneProductById", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)("products_service/product"),
    (0, common_1.Controller)("product"),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map