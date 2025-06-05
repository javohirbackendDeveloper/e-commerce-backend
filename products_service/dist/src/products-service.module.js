"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const category_module_1 = require("./category/category.module");
const product_module_1 = require("./product/product.module");
const prisma_service_1 = require("../prisma/prisma.service");
const comments_module_1 = require("./comments/comments.module");
const liked_product_module_1 = require("./liked-product/liked-product.module");
const search_module_1 = require("./search/search.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const brand_module_1 = require("./brand/brand.module");
const tezbuy_packages_1 = require("tezbuy_packages");
const filters_module_1 = require("./filters/filters.module");
const coupons_module_1 = require("./coupons/coupons.module");
const poster_module_1 = require("./poster/poster.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const cache_manager_1 = require("@nestjs/cache-manager");
const redisStore = require("cache-manager-ioredis-yet");
let ProductsServiceModule = class ProductsServiceModule {
};
exports.ProductsServiceModule = ProductsServiceModule;
exports.ProductsServiceModule = ProductsServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: "./apps/products_service/.env",
                isGlobal: true,
                validationSchema: Joi.object({
                    DATABASE_URL: Joi.string().required(),
                    PORT: Joi.number().required(),
                    RABBIT_MQ_URI: Joi.string().required(),
                }),
            }),
            tezbuy_packages_1.RmqModule.register({ name: "ORDER_SERVICE" }),
            cache_manager_1.CacheModule.register({
                isGlobal: true,
                nonBlocking: true,
                refreshThreshold: 5,
                store: redisStore,
                url: "rediss://default:36324d3c8f944be898442b5fb132a650@gusc1-careful-oriole-30679.upstash.io:30679",
                ttl: 60,
            }),
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            comments_module_1.CommentsModule,
            liked_product_module_1.LikedProductModule,
            search_module_1.SearchModule,
            cloudinary_module_1.CloudinaryModule,
            brand_module_1.BrandModule,
            filters_module_1.FiltersModule,
            coupons_module_1.CouponsModule,
            poster_module_1.PosterModule,
            dashboard_module_1.DashboardModule,
        ],
        controllers: [],
        providers: [prisma_service_1.PrismaService, tezbuy_packages_1.RmqService],
    })
], ProductsServiceModule);
//# sourceMappingURL=products-service.module.js.map