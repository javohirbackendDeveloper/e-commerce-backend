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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const rxjs_1 = require("rxjs");
const microservices_1 = require("@nestjs/microservices");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let CommentsService = class CommentsService {
    constructor(orderClient, prisma, cloudinary) {
        this.orderClient = orderClient;
        this.prisma = prisma;
        this.cloudinary = cloudinary;
    }
    async create(createCommentDto, file, req) {
        const userId = req.headers["x_user_id"];
        if (!userId) {
            throw new common_1.HttpException("Please login again to send a comment", common_1.HttpStatus.UNAUTHORIZED);
        }
        let imageUrl = null;
        if (file) {
            imageUrl = await this.cloudinary.uploadFile(file, "Comments");
        }
        const comment = await this.prisma.comments.create({
            data: Object.assign(Object.assign({}, createCommentDto), { sent_person: userId, image: imageUrl ? imageUrl : "" }),
        });
        return comment;
    }
    async findAll(req) {
        try {
            const userId = req.headers["x_user_id"];
            if (!userId) {
                throw new common_1.HttpException("Please login again to send a comment", common_1.HttpStatus.UNAUTHORIZED);
            }
            const userComments = await this.prisma.comments.findMany({
                where: {
                    sent_person: userId,
                },
            });
            return userComments;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        const comment = await this.prisma.comments.findUnique({
            where: { id },
        });
        if (!comment)
            throw new common_1.NotFoundException("Comment not found");
        return comment;
    }
    async update(id, updateCommentDto, req) {
        const comment = await this.prisma.comments.findUnique({
            where: { id },
        });
        const userId = req.headers["x_user_id"];
        const userRole = req.headers["x_user_role"];
        if (!userId) {
            throw new common_1.HttpException("Please login again to send a comment", common_1.HttpStatus.UNAUTHORIZED);
        }
        if (userRole !== "Admin") {
            if (userId !== comment.sent_person) {
                return { message: "Bu kamentariyani siz yangilay olmaysiz" };
            }
            const updated = await this.prisma.comments.update({
                where: { id },
                data: Object.assign(Object.assign({}, updateCommentDto), { updatedAt: new Date() }),
            });
        }
        const updated = await this.prisma.comments.update({
            where: { id },
            data: Object.assign(Object.assign({}, updateCommentDto), { updatedAt: new Date() }),
        });
        return updated;
    }
    async remove(id, req) {
        try {
            const comment = await this.prisma.comments.findUnique({
                where: { id },
            });
            const userId = req.headers["x_user_id"];
            const userRole = req.headers["x_user_role"];
            if (!userId) {
                throw new common_1.HttpException("Please login again to send a comment", common_1.HttpStatus.UNAUTHORIZED);
            }
            if (userRole !== "Admin") {
                if (userId !== comment.sent_person) {
                    return { message: "Bu kamentariyani siz o'chira olmaysiz" };
                }
                return await this.prisma.comments.delete({
                    where: { id },
                });
            }
            return this.prisma.comments.delete({
                where: { id },
            });
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getPendingComments(req) {
        try {
            const userId = req.headers["x_user_id"];
            if (!userId) {
                throw new common_1.HttpException("Please login again to get pending comments", common_1.HttpStatus.UNAUTHORIZED);
            }
            const orderedProductIds = await (0, rxjs_1.firstValueFrom)(this.orderClient.send("get_ordered_products", userId));
            const onlyIds = orderedProductIds.flatMap((orderItem) => {
                return orderItem.orderItems.map((data) => data.productId);
            });
            const comments = await this.prisma.comments.findMany({
                where: {
                    sent_person: userId,
                },
            });
            const onlyCommentIds = comments.map((comment) => {
                return comment.productId;
            });
            const notCommentedProductIds = [];
            onlyIds.forEach((id) => {
                if (!onlyCommentIds.includes(id)) {
                    notCommentedProductIds.push(id);
                }
            });
            const products = await this.prisma.product.findMany({
                where: {
                    id: {
                        in: notCommentedProductIds,
                    },
                },
                include: {
                    product_images: true,
                },
            });
            return products;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("ORDER_SERVICE")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map