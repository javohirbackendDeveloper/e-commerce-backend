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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let CategoryService = class CategoryService {
    constructor(prismaService, cloudinaryService) {
        this.prismaService = prismaService;
        this.cloudinaryService = cloudinaryService;
    }
    async createSubCategory(createSubCategoryDto) {
        try {
            const { title, parentId } = createSubCategoryDto;
            const existTitle = await this.prismaService.category.findUnique({
                where: { title },
            });
            if (existTitle) {
                throw new common_1.HttpException("This  category title already exist", common_1.HttpStatus.BAD_REQUEST);
            }
            const parentCat = await this.prismaService.category.findUnique({
                where: { id: parentId },
            });
            if (!parentCat) {
                throw new common_1.HttpException("This parent category not found with this id " + parentId, common_1.HttpStatus.NOT_FOUND);
            }
            const subcategory = await this.prismaService.category.create({
                data: { title, parentId },
            });
            await this.prismaService.category.update({
                where: { id: parentCat.id },
                data: {
                    children: parentCat.children + 1,
                },
            });
            return subcategory;
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException(err.message, err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(createCategoryDto, file) {
        try {
            const { title } = createCategoryDto;
            let parentCategory = null;
            const existTitle = await this.prismaService.category.findUnique({
                where: { title },
            });
            if (existTitle) {
                throw new common_1.HttpException("This  category title already exist", common_1.HttpStatus.BAD_REQUEST);
            }
            if (!file) {
                throw new common_1.HttpException("Please upload icon to add category", common_1.HttpStatus.BAD_REQUEST);
            }
            const iconUrl = await this.cloudinaryService.uploadFile(file, "categories");
            const category = await this.prismaService.category.create({
                data: {
                    title,
                    icon: iconUrl || "",
                    parentId: "",
                },
            });
            return category;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error.message || "Internal server error", error.status || 500);
        }
    }
    async findAll() {
        try {
            const categories = await this.prismaService.category.findMany();
            return categories;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || "Internal server error", error.status || 500);
        }
    }
    async findAllParentCats() {
        try {
            const categories = await this.prismaService.category.findMany({
                where: { parentId: "" },
            });
            return categories;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || "Internal server error", error.status || 500);
        }
    }
    async findAllParentsWithSubCats() {
        try {
            const categories = await this.prismaService.category.findMany({
                where: { parentId: "" },
            });
            const returntData = Promise.all(categories.map(async (cat) => {
                const subCategories = await this.getAllChildCategories(cat.id);
                return {
                    id: cat.id,
                    parentId: cat.parentId,
                    icon: cat.icon,
                    title: cat.title,
                    children: cat.children,
                    subCategories,
                };
            }));
            return returntData;
        }
        catch (error) {
            console.log({ error });
            throw new common_1.HttpException(error.message || "Internal server error", error.status || 500);
        }
    }
    async findOne(id) {
        try {
            const category = await this.prismaService.category.findUnique({
                where: { id },
            });
            return category;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || "Internal server error", error.status || 500);
        }
    }
    async update(id, updateCategoryDto, file) {
        const { title } = updateCategoryDto;
        try {
            const existCategory = await this.prismaService.category.findUnique({
                where: { id },
            });
            if (!existCategory) {
                throw new common_1.HttpException("This category not found with this id " + id, common_1.HttpStatus.NOT_FOUND);
            }
            let iconUrl = existCategory.icon;
            if (file) {
                await this.cloudinaryService.deleteImage(existCategory.icon);
                iconUrl = await this.cloudinaryService.uploadFile(file, "categories");
            }
            const category = await this.prismaService.category.update({
                where: { id },
                data: { title, icon: iconUrl || "" },
            });
            return category;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || "Internal server error", error.status || 500);
        }
    }
    async remove(id) {
        try {
            const category = await this.prismaService.category.findUnique({
                where: { id },
            });
            if (!category) {
                throw new common_1.HttpException("This category not found with this is " + id, common_1.HttpStatus.NOT_FOUND);
            }
            if (category.icon) {
                await this.cloudinaryService.deleteImage(category.icon);
            }
            const categories = await this.prismaService.category.findMany({
                where: { parentId: id },
            });
            for (const category of categories) {
                await this.remove(category.id);
            }
            await this.prismaService.category.delete({
                where: { id },
            });
            if (category.parentId) {
                await this.prismaService.category.update({
                    where: { id: category.parentId },
                    data: {
                        children: {
                            decrement: 1,
                        },
                    },
                });
            }
            return { message: "Turkum muvaffaqiyatli o'chirildi" };
        }
        catch (error) {
            console.log({ error });
            throw new common_1.HttpException(error.message || "Internal server error", error.status || 500);
        }
    }
    async getAllChildCategories(categoryId) {
        try {
            const categories = await this.prismaService.category.findMany({
                where: { parentId: categoryId },
            });
            return categories;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllChildCategoryIds(categoryId) {
        try {
            const directChildren = await this.prismaService.category.findMany({
                where: { parentId: categoryId },
            });
            if (!directChildren.length)
                return [categoryId];
            const allDescendants = await Promise.all(directChildren.map((child) => this.getAllChildCategoryIds(child.id)));
            return [categoryId, ...allDescendants.flat()];
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllLeafCategories() {
        try {
            const categories = await this.prismaService.category.findMany({
                where: {
                    children: {
                        equals: 0,
                    },
                },
            });
            return categories;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllSecondCategories() {
        try {
            const parentCategoryIds = (await this.findAllParentCats()).map((cat) => cat.id);
            const categories = await this.prismaService.category.findMany({
                where: {
                    parentId: { in: parentCategoryIds },
                },
            });
            return categories;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], CategoryService);
//# sourceMappingURL=category.service.js.map