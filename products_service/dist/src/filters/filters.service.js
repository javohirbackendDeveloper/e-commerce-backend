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
exports.FiltersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const category_service_1 = require("../category/category.service");
let FiltersService = class FiltersService {
    constructor(categoryService, prismaService) {
        this.categoryService = categoryService;
        this.prismaService = prismaService;
    }
    async create(createGeneralFilterDto) {
        try {
            const { title, inputType, type } = createGeneralFilterDto;
            const existTitle = await this.prismaService.filterType.findUnique({
                where: { title },
            });
            if (existTitle) {
                throw new common_1.HttpException("This filter title already exists", common_1.HttpStatus.BAD_REQUEST);
            }
            const filter = await this.prismaService.filterType.create({
                data: { title, inputType, type: type || "GENERAL" },
            });
            return filter;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const generalFilters = await this.prismaService.filterType.findMany({
                where: { type: "GENERAL" },
                include: {
                    values: true,
                },
            });
            return generalFilters;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const filter = await this.prismaService.filterType.findUnique({
                where: { id },
                include: {
                    values: true,
                    filterCategory: true,
                },
            });
            return filter;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateFilterDto) {
        try {
            const filter = await this.prismaService.filterType.update({
                where: { id },
                data: Object.assign({}, updateFilterDto),
            });
            return filter;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const filter = await this.prismaService.filterType.delete({
                where: { id },
            });
            return filter;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getFiltersByCategoryId(categoryId) {
        try {
            const childrenCategoryIds = await this.categoryService.getAllChildCategoryIds(categoryId);
            const categoryFilters = await this.prismaService.filterCategory.findMany({
                where: {
                    categoryId: {
                        in: childrenCategoryIds,
                    },
                },
                include: {
                    filter: {
                        include: { values: true },
                    },
                },
            });
            const availableFilters = categoryFilters.filter((item) => item.filter.values.length > 0);
            return availableFilters;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async createSpecificFilter(createGeneralFilterDto) {
        try {
            const { title, inputType, type, categoryIds } = createGeneralFilterDto;
            const existTitle = await this.prismaService.filterType.findUnique({
                where: { title },
            });
            if (existTitle) {
                throw new common_1.HttpException("This filter title already exists", common_1.HttpStatus.BAD_REQUEST);
            }
            const filter = await this.prismaService.filterType.create({
                data: { title, inputType, type: type || "GENERAL" },
            });
            const createdFilterCategories = [];
            for (const catId of categoryIds) {
                const existFilterCategory = await this.prismaService.filterCategory.findUnique({
                    where: {
                        categoryId_filterId: { filterId: filter.id, categoryId: catId },
                    },
                });
                if (!existFilterCategory) {
                    const createdResponse = await this.prismaService.filterCategory.create({
                        data: {
                            categoryId: catId,
                            filterId: filter.id,
                        },
                    });
                    createdFilterCategories.push(createdResponse);
                }
            }
            return { filter, createdFilterCategories };
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAllSpecific() {
        try {
            const specificFilters = await this.prismaService.filterType.findMany({
                where: { type: "SPECIFIC" },
                include: {
                    filterCategory: {
                        include: { category: true },
                    },
                },
            });
            return specificFilters;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async removeSpecificFilter(id) {
        try {
            const filterValues = await this.prismaService.filterValues.deleteMany({
                where: { filterId: id },
            });
            const filterCategories = await this.prismaService.filterCategory.deleteMany({
                where: { filterId: id },
            });
            const filter = await this.prismaService.filterType.delete({
                where: { id },
            });
            return filter;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createValue(createValue) {
        try {
            const { filterId, value } = createValue;
            const filterPrevValues = await this.prismaService.filterValues.findMany({
                where: { filterId },
            });
            const onlyPrevValues = filterPrevValues.map((item) => item.value);
            const createdValues = [];
            for (const v of value) {
                if (!onlyPrevValues.includes(v)) {
                    const createdValue = await this.prismaService.filterValues.create({
                        data: { filterId, value: v },
                    });
                    createdValues.push(createdValue);
                }
            }
            return createdValues;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteValue(id) {
        try {
            const deletedValue = await this.prismaService.filterValues.delete({
                where: {
                    id,
                },
            });
            return deletedValue;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.FiltersService = FiltersService;
exports.FiltersService = FiltersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        prisma_service_1.PrismaService])
], FiltersService);
//# sourceMappingURL=filters.service.js.map