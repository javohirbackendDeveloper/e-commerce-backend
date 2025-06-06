"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const cart_service_1 = require("../cart/cart.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const services_1 = require("../constants/services");
const tezbuy_packages_1 = require("tezbuy_packages");
const services = [];
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tezbuy_packages_1.RmqModule.register({
                name: services_1.ORDER_SERVICE,
            }),
            tezbuy_packages_1.RmqModule.register({
                name: services_1.PUNKT_SERVICE,
            }),
            tezbuy_packages_1.RmqModule.register({
                name: services_1.PRODUCTS_SERVICE,
            }),
            tezbuy_packages_1.RmqModule.register({
                name: services_1.STAFF_SERVICE,
            }),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, cart_service_1.CartService, prisma_service_1.PrismaService],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map