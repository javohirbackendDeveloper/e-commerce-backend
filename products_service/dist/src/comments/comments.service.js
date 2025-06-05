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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CommentsService = class CommentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCommentDto, req) {
        const userId = req.headers["x_user_id"];
        if (!userId) {
            throw new common_1.HttpException("Please login again to send a comment", common_1.HttpStatus.UNAUTHORIZED);
        }
        const comment = await this.prisma.comments.create({
            data: Object.assign(Object.assign({}, createCommentDto), { sent_person: userId }),
        });
        return comment;
    }
    async findAll() {
        return this.prisma.comments.findMany({
            orderBy: { createdAt: "desc" },
        });
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
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map