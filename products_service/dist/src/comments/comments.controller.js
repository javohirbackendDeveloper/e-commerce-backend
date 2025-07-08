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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const update_comment_dto_1 = require("./dto/update-comment.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    create(data, file, req) {
        return this.commentsService.create(data, file, req);
    }
    findAll(req) {
        return this.commentsService.findAll(req);
    }
    getPendingComments(req) {
        return this.commentsService.getPendingComments(req);
    }
    findOne(id) {
        return this.commentsService.findOne(id);
    }
    update(id, updateCommentDto, req) {
        return this.commentsService.update(id, updateCommentDto, req);
    }
    remove(id, req) {
        return this.commentsService.remove(id, req);
    }
};
exports.CommentsController = CommentsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiOperation)({ summary: "Yangi kommentariya yaratish" }),
    (0, swagger_1.ApiBody)({ type: create_comment_dto_1.CreateCommentDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Kommentariya yaratildi" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto, Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Barcha kommentariyalarni olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kommentariyalar ro'yxati" }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("getPendingComments"),
    (0, swagger_1.ApiOperation)({ summary: "Barcha kutayotgan kommentariyalarni olish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Kutayotgan kommentariyalar ro'yxati",
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getPendingComments", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha kommentariyani olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kommentariya ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kommentariya ma'lumotlari" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Kommentariyani yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kommentariya ID" }),
    (0, swagger_1.ApiBody)({ type: update_comment_dto_1.UpdateCommentDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kommentariya yangilandi" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comment_dto_1.UpdateCommentDto, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Kommentariyani o‘chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kommentariya ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kommentariya o‘chirildi" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "remove", null);
exports.CommentsController = CommentsController = __decorate([
    (0, swagger_1.ApiTags)("products_service/comments"),
    (0, common_1.Controller)("comments"),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
//# sourceMappingURL=comments.controller.js.map