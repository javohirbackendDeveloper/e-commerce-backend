"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersModule = void 0;
const common_1 = require("@nestjs/common");
const filters_service_1 = require("./filters.service");
const filters_controller_1 = require("./filters.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
const category_service_1 = require("../category/category.service");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let FiltersModule = class FiltersModule {
};
exports.FiltersModule = FiltersModule;
exports.FiltersModule = FiltersModule = __decorate([
    (0, common_1.Module)({
        controllers: [filters_controller_1.FiltersController],
        providers: [
            filters_service_1.FiltersService,
            prisma_service_1.PrismaService,
            category_service_1.CategoryService,
            cloudinary_service_1.CloudinaryService,
        ],
    })
], FiltersModule);
//# sourceMappingURL=filters.module.js.map