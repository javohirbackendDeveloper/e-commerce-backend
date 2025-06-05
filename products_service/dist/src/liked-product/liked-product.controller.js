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
exports.LikedProductController = void 0;
const common_1 = require("@nestjs/common");
const liked_product_service_1 = require("./liked-product.service");
const create_liked_product_dto_1 = require("./dto/create-liked-product.dto");
const swagger_1 = require("@nestjs/swagger");
let LikedProductController = class LikedProductController {
    constructor(likedProductService) {
        this.likedProductService = likedProductService;
    }
    create(req, createLikedProductDto) {
        return this.likedProductService.create(createLikedProductDto, req);
    }
    findAll(req) {
        return this.likedProductService.findAll(req);
    }
    remove(req, id) {
        return this.likedProductService.remove(id, req);
    }
};
exports.LikedProductController = LikedProductController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Add a liked product for the current user" }),
    (0, swagger_1.ApiBody)({ type: create_liked_product_dto_1.CreateLikedProductDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Product liked successfully." }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_liked_product_dto_1.CreateLikedProductDto]),
    __metadata("design:returntype", void 0)
], LikedProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all liked products for the current user" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of liked products returned." }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LikedProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Remove a liked product by its ID" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "ID of the liked product to remove" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Product removed from liked list." }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LikedProductController.prototype, "remove", null);
exports.LikedProductController = LikedProductController = __decorate([
    (0, swagger_1.ApiTags)("products_service/liked-products"),
    (0, common_1.Controller)("liked-product"),
    __metadata("design:paramtypes", [liked_product_service_1.LikedProductService])
], LikedProductController);
//# sourceMappingURL=liked-product.controller.js.map