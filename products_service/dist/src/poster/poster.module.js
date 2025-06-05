"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosterModule = void 0;
const common_1 = require("@nestjs/common");
const poster_service_1 = require("./poster.service");
const poster_controller_1 = require("./poster.controller");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let PosterModule = class PosterModule {
};
exports.PosterModule = PosterModule;
exports.PosterModule = PosterModule = __decorate([
    (0, common_1.Module)({
        controllers: [poster_controller_1.PosterController],
        providers: [poster_service_1.PosterService, prisma_service_1.PrismaService, cloudinary_service_1.CloudinaryService],
    })
], PosterModule);
//# sourceMappingURL=poster.module.js.map