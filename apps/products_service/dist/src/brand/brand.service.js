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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../category/category.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let BrandService = class BrandService {
    constructor(categoryService, prismaService) {
        this.categoryService = categoryService;
        this.prismaService = prismaService;
    }
    async createBrandWithCategory(dto) {
        try {
            const { name, categoryId } = dto;
            const existBrand = await this.prismaService.brand.findUnique({
                where: { name },
            });
            if (existBrand) {
                throw new common_1.HttpException("This brand name already exists", common_1.HttpStatus.BAD_REQUEST);
            }
            const brand = await this.prismaService.brand.create({
                data: { name },
            });
            const createdRelations = await this.createBrandCategory(categoryId, brand);
            return {
                message: "Brand muvaffaqiyatli yaratildi",
                brand,
                createdRelations,
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findByCategoryId(id) {
        try {
            const childrenCategories = await this.categoryService.getAllChildCategoryIds(id);
            const brands = await this.prismaService.brandCategory.findMany({
                where: {
                    categoryId: { in: childrenCategories },
                },
                include: {
                    brand: true,
                },
            });
            const uniqueBrands = [];
            for (const brand of brands) {
                const brandId = brand.brandId;
                const existBrand = uniqueBrands.find((item) => item.brandId === brandId);
                if (!existBrand) {
                    uniqueBrands.push(brand);
                }
            }
            return uniqueBrands;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findOne(id) {
        try {
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const brands = await this.prismaService.brand.findMany({
                include: {
                    categories: {
                        include: {
                            category: true,
                        },
                    },
                },
            });
            return brands;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateBrandDto) {
        try {
            const { name, categoryId } = updateBrandDto;
            const existBrand = await this.prismaService.brand.findUnique({
                where: { id },
            });
            if (!existBrand) {
                throw new common_1.HttpException("This brand not found with this id " + id, common_1.HttpStatus.NOT_FOUND);
            }
            const brand = await this.prismaService.brand.update({
                where: { id },
                data: {
                    name,
                },
            });
            await this.prismaService.brandCategory.deleteMany({
                where: {
                    brandId: id,
                },
            });
            const createdRelations = await this.createBrandCategory(categoryId, brand);
            return {
                message: "Brand muvaffaqiyatli yangilanti",
                createdRelations,
                brand,
            };
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const brandCategory = await this.prismaService.brandCategory.deleteMany({
                where: { brandId: id },
            });
            const brand = await this.prismaService.brand.delete({
                where: { id },
            });
            return brand;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createBrandCategory(categoryId, brand) {
        const createdRelations = [];
        for (const cat of categoryId) {
            const existRelation = await this.prismaService.brandCategory.findFirst({
                where: { brandId: brand.id, categoryId: cat },
            });
            if (!existRelation) {
                const relation = await this.prismaService.brandCategory.create({
                    data: {
                        brandId: brand.id,
                        categoryId: cat,
                    },
                });
                createdRelations.push(relation);
            }
        }
        return createdRelations;
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        prisma_service_1.PrismaService])
], BrandService);
//# sourceMappingURL=brand.service.js.map