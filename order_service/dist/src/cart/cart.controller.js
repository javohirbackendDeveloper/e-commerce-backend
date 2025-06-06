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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const create_cart_dto_1 = require("./dto/create-cart.dto");
const update_cart_dto_1 = require("./dto/update-cart.dto");
const swagger_1 = require("@nestjs/swagger");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    create(req, dto) {
        return this.cartService.create(dto, req);
    }
    getPriceQuantity(req) {
        return this.cartService.getPriceQuantity(req);
    }
    findAll(req) {
        return this.cartService.findAll(req);
    }
    update(req, id, dto) {
        return this.cartService.update(id, dto, req);
    }
    remove(req, id) {
        return this.cartService.remove(id, req);
    }
    payment(req, res) {
        return this.cartService.payment(req, res);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Add item to cart" }),
    (0, swagger_1.ApiBody)({ type: create_cart_dto_1.CreateCartDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Product added to cart" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid input data" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cart_dto_1.CreateCartDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("getPriceQuantity"),
    (0, swagger_1.ApiOperation)({ summary: "Get total price and quantity in cart" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Cart summary retrieved" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getPriceQuantity", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all cart items" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Cart items retrieved" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update a cart item" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Cart item ID" }),
    (0, swagger_1.ApiBody)({ type: update_cart_dto_1.UpdateCartDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Cart item updated" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid input data" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Item not found" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_cart_dto_1.UpdateCartDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete a cart item" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Cart item ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Cart item removed" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Item not found" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("create-checkout-session"),
    (0, swagger_1.ApiOperation)({ summary: "Create Stripe checkout session" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Checkout session created" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "payment", null);
exports.CartController = CartController = __decorate([
    (0, swagger_1.ApiTags)("Cart"),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.Controller)("cart"),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map