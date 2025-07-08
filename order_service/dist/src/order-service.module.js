"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const cart_module_1 = require("./cart/cart.module");
const order_module_1 = require("./order/order.module");
const tezbuy_packages_1 = require("tezbuy_packages");
let OrderServiceModule = class OrderServiceModule {
};
exports.OrderServiceModule = OrderServiceModule;
exports.OrderServiceModule = OrderServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: "./apps/order_service/.env",
                isGlobal: true,
            }),
            cart_module_1.CartModule,
            order_module_1.OrderModule,
        ],
        controllers: [],
        providers: [prisma_service_1.PrismaService, tezbuy_packages_1.RmqService],
    })
], OrderServiceModule);
//# sourceMappingURL=order-service.module.js.map