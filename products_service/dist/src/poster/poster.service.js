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
exports.PosterService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let PosterService = class PosterService {
    constructor(cloudinary, prisma) {
        this.cloudinary = cloudinary;
        this.prisma = prisma;
    }
    async create(title, img) {
        try {
            const imgUrl = await this.cloudinary.uploadFile(img, "Poster");
            const poster = await this.prisma.poster.create({
                data: {
                    img: imgUrl || "",
                    title: title || "",
                },
            });
            return poster;
        }
        catch (err) {
            throw new common_1.HttpException(err.message, err.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            return this.prisma.poster.findMany();
        }
        catch (err) {
            throw new common_1.HttpException(err.message, err.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const poster = await this.prisma.poster.findUnique({ where: { id } });
            if (!poster)
                throw new common_1.NotFoundException("Poster not found");
            return poster;
        }
        catch (err) {
            throw new common_1.HttpException(err.message, err.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const exist = await this.findOne(id);
            const deletedImage = await this.cloudinary.deleteImage(exist.img);
            return this.prisma.poster.delete({ where: { id } });
        }
        catch (err) {
            throw new common_1.HttpException(err.message, err.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PosterService = PosterService;
exports.PosterService = PosterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService,
        prisma_service_1.PrismaService])
], PosterService);
//# sourceMappingURL=poster.service.js.map