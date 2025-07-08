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
exports.LikedProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let LikedProductService = class LikedProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createLikedProductDto, req) {
        const { productId } = createLikedProductDto;
        const userId = req.headers["x_user_id"];
        if (!userId) {
            throw new common_1.HttpException("Please login again to save this product", common_1.HttpStatus.UNAUTHORIZED);
        }
        const existing = await this.prisma.likedProduct.findFirst({
            where: { userId: userId, productId },
        });
        if (existing) {
            return { message: "Siz allaqachon bu mahsulotni saqlagansiz" };
        }
        const isExistProduct = await this.prisma.product.findUnique({
            where: {
                id: productId,
            },
        });
        if (!isExistProduct) {
            return { message: "Bu mahsulot topilmadi" };
        }
        if (!isExistProduct) {
            return { message: "Bu mahsulot topilmadi" };
        }
        return await this.prisma.likedProduct.create({
            data: { userId: userId, productId },
        });
    }
    async findAll(req) {
        const userId = req.headers["x_user_id"];
        if (!userId) {
            throw new common_1.HttpException("Please login again to save this product", common_1.HttpStatus.UNAUTHORIZED);
        }
        return await this.prisma.likedProduct.findMany({
            where: { userId: userId },
            orderBy: { createdAt: "desc" },
            include: {
                product: {
                    include: {
                        product_images: true,
                    },
                },
            },
        });
    }
    async remove(id, req) {
        const userId = req.headers["x_user_id"];
        if (!userId) {
            throw new common_1.HttpException("Please login again to save this product", common_1.HttpStatus.UNAUTHORIZED);
        }
        const existing = await this.prisma.likedProduct.findUnique({
            where: { id },
        });
        if (!existing) {
            throw new common_1.NotFoundException("Liked product not found");
        }
        const like = await this.prisma.likedProduct.delete({
            where: { id, userId: userId },
        });
        if (!like) {
            throw new common_1.HttpException("You can delete only your saved products", common_1.HttpStatus.UNAUTHORIZED);
        }
        return { message: "Deleted successfully" };
    }
};
exports.LikedProductService = LikedProductService;
exports.LikedProductService = LikedProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LikedProductService);
//# sourceMappingURL=liked-product.service.js.map