"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const category_service_1 = require("../category/category.service");
const search_service_1 = require("../search/search.service");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const tezbuy_packages_1 = require("tezbuy_packages");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [tezbuy_packages_1.RmqModule.register({ name: "ORDER_SERVICE" })],
        controllers: [product_controller_1.ProductController],
        providers: [
            product_service_1.ProductService,
            prisma_service_1.PrismaService,
            category_service_1.CategoryService,
            search_service_1.SearchService,
            cloudinary_service_1.CloudinaryService,
        ],
        exports: [],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map