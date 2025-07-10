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
exports.PosterController = void 0;
const common_1 = require("@nestjs/common");
const poster_service_1 = require("./poster.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
class CreatePosterDto {
}
let PosterController = class PosterController {
    constructor(posterService) {
        this.posterService = posterService;
    }
    create(req, file) {
        console.log({ data: req.body.title, messa: "request" });
        return this.posterService.create(req.body.title, file);
    }
    findAll() {
        return this.posterService.findAll();
    }
    findOne(id) {
        return this.posterService.findOne(id);
    }
    remove(id) {
        return this.posterService.remove(id);
    }
};
exports.PosterController = PosterController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("img")),
    (0, swagger_1.ApiOperation)({ summary: "Yangi poster yaratish" }),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiBody)({
        description: "Poster ma'lumotlari va rasm fayli",
        schema: {
            type: "object",
            properties: {
                title: { type: "string" },
                img: {
                    type: "string",
                    format: "binary",
                },
            },
            required: ["title", "img"],
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Poster muvaffaqiyatli yaratildi" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", void 0)
], PosterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Barcha posterlarni olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Posterlar ro'yxati" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PosterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha posterni olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Poster ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Poster ma'lumotlari" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PosterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Posterni o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Poster ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Poster o'chirildi" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PosterController.prototype, "remove", null);
exports.PosterController = PosterController = __decorate([
    (0, swagger_1.ApiTags)("poster"),
    (0, common_1.Controller)("poster"),
    __metadata("design:paramtypes", [poster_service_1.PosterService])
], PosterController);
//# sourceMappingURL=poster.controller.js.map