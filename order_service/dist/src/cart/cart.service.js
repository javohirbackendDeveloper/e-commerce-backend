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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const stripe_1 = require("stripe");
const prisma_service_1 = require("../../prisma/prisma.service");
const stripe = new stripe_1.default("sk_test_51Qg7BF097qSAwIsLIEx7f8HuBZdPToxhyOVQhRlw4MnAdBz3HJrpbzR8dDN93f6vgDWVdeSTHB4hChI5urFDqIeH00FbktL9xS");
let CartService = class CartService {
    constructor(prismService, orderClient, productClient) {
        this.prismService = prismService;
        this.orderClient = orderClient;
        this.productClient = productClient;
    }
    async create(createCartItemDto, req) {
        try {
            const userId = req.headers["x_user_id"];
            if (!userId) {
                throw new common_1.HttpException("Please login again to continue", common_1.HttpStatus.UNAUTHORIZED);
            }
            const { productId, quantity } = createCartItemDto;
            const product = await (0, rxjs_1.firstValueFrom)(this.productClient.send("get_cart_product", productId));
            if (!product) {
                throw new common_1.HttpException("This product not found with this id " + productId, common_1.HttpStatus.NOT_FOUND);
            }
            if (!product.quantity || product.quantity < quantity) {
                throw new common_1.HttpException(`There are only ${product.quantity} item from this product in warehouse`, common_1.HttpStatus.NOT_FOUND);
            }
            const existCartItem = await this.prismService.cartItem.findFirst({
                where: { productId, userId: userId },
            });
            if (existCartItem) {
                const cart = await this.prismService.cartItem.update({
                    where: { id: existCartItem.id },
                    data: {
                        quantity: {
                            increment: quantity,
                        },
                    },
                });
                return cart;
            }
            const cartItem = await this.prismService.cartItem.create({
                data: {
                    productId,
                    quantity,
                    userId: userId,
                },
            });
            return cartItem;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getPriceQuantity(req) {
        try {
            const userId = req.headers["x_user_id"];
            const cartItems = await this.prismService.cartItem.findMany({
                where: {
                    userId: userId,
                },
            });
            let totalPrice = 0;
            const totalQuantity = cartItems.length;
            for (const cartProduct of cartItems) {
                const product = await (0, rxjs_1.firstValueFrom)(this.productClient.send("get_cart_product", cartProduct.productId));
                if (product && product.quantity >= cartProduct.quantity) {
                    totalPrice += Number(product.price * cartProduct.quantity);
                }
            }
            return {
                totalPrice,
                totalQuantity,
            };
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateCartDto, req) {
        try {
            const userId = req.headers["x_user_id"];
            const { quantity } = updateCartDto;
            if (!userId) {
                throw new common_1.HttpException("Please login again to continue", common_1.HttpStatus.UNAUTHORIZED);
            }
            const cartitem = await this.prismService.cartItem.findFirst({
                where: { userId: userId, productId: id },
            });
            if (!cartitem) {
                throw new common_1.HttpException("This cartItem not found with this id " + id, common_1.HttpStatus.NOT_FOUND);
            }
            if ((cartitem === null || cartitem === void 0 ? void 0 : cartitem.userId) !== userId) {
                throw new common_1.HttpException("You cannot update cart item of other people", common_1.HttpStatus.UNAUTHORIZED);
            }
            const product = await (0, rxjs_1.firstValueFrom)(this.productClient.send("get_cart_product", cartitem.productId));
            if (product.quantity < quantity) {
                throw new common_1.HttpException(`There are only ${product.quantity} item from this product in warehouse`, common_1.HttpStatus.NOT_FOUND);
            }
            const exist = await this.prismService.cartItem.findUnique({
                where: { id: cartitem.id },
            });
            console.log({ exist });
            const cartItem = await this.prismService.cartItem.update({
                where: { id: cartitem.id },
                data: {
                    quantity: {
                        increment: quantity,
                    },
                },
            });
            return cartItem;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id, req) {
        try {
            const userId = req.headers["x_user_id"];
            const cartitem = await this.prismService.cartItem.findUnique({
                where: { id },
            });
            if (!cartitem) {
                throw new common_1.HttpException("This cart item not found with this id " + id, common_1.HttpStatus.NOT_FOUND);
            }
            if ((cartitem === null || cartitem === void 0 ? void 0 : cartitem.userId) !== userId) {
                throw new common_1.HttpException("You cannot delete cart item of other people", common_1.HttpStatus.UNAUTHORIZED);
            }
            return this.prismService.cartItem.delete({
                where: { id },
            });
        }
        catch (err) {
            console.log({ err });
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll(req) {
        try {
            const userId = req.headers["x_user_id"];
            if (!userId) {
                throw new common_1.HttpException("Please login again to continue", common_1.HttpStatus.UNAUTHORIZED);
            }
            const cartItems = await this.prismService.cartItem.findMany({
                where: { userId: userId },
            });
            if (!cartItems) {
                return { cartItemsWithProduct: [], grandPrice: [] };
            }
            const cartProductIds = cartItems.map((cart) => cart.productId);
            let allProducts = [];
            if (cartProductIds.length > 0) {
                allProducts = await (0, rxjs_1.firstValueFrom)(this.productClient.send("get_products", cartProductIds));
            }
            else {
                return { cartItemsWithProduct: [], grandPrice: [] };
            }
            const productIndexMap = new Map(allProducts.map((product) => [product.id, product]));
            const cartItemsWithProduct = cartItems.map((item) => {
                const product = productIndexMap.get(item.productId);
                const total = product ? item.quantity * product.price : 0;
                return Object.assign(Object.assign(Object.assign(Object.assign({}, item), { purchasedQuantity: item.quantity || 1 }), product), { cartId: item.id, total });
            });
            const grandPrice = cartItemsWithProduct.reduce((acc, item) => acc + (item.total || 0), 0);
            return { cartItemsWithProduct, grandPrice };
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async removeAll(req) {
        try {
            const userId = req.headers["x_user_id"];
            const allCartProducts = await this.findAll(req);
            const updatedProducts = allCartProducts.cartItemsWithProduct.map((product) => {
                return {
                    productId: product.productId,
                    quantity: product.purchasedQuantity,
                };
            });
            const deletedCartItems = await this.prismService.cartItem.deleteMany({
                where: {
                    userId: userId,
                },
            });
            return deletedCartItems;
        }
        catch (err) {
            console.log({ err });
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async payment(paymentDto, req, res) {
        try {
            const { totalPrice } = paymentDto;
            console.log({ totalPrice });
            const userId = req.headers["x_user_id"];
            const products = await this.findAll(req);
            const lineItems = products.cartItemsWithProduct.map((product) => {
                var _a;
                return ({
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.product_name,
                            images: [(_a = product.product_images[0]) === null || _a === void 0 ? void 0 : _a.imageUrl],
                        },
                        unit_amount: Math.round((totalPrice / 12500) * 100),
                    },
                    quantity: product.purchasedQuantity,
                });
            });
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: lineItems,
                mode: "payment",
                success_url: "http://localhost:5173/success",
                cancel_url: "http://localhost:5173/cancel",
            });
            res.json({ id: session.id });
        }
        catch (err) {
            console.log({ err });
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)("ORDER_SERVICE")),
    __param(2, (0, common_1.Inject)("PRODUCTS_SERVICE")),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], CartService);
//# sourceMappingURL=cart.service.js.map