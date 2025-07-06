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
exports.AppliesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AppliesService = class AppliesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAppliedPunkts() {
        try {
            const appliedPunkts = await this.prismaService.applyForPunkt.findMany({
                where: { status: "APPLIED" },
            });
            return appliedPunkts;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getRepairingPunkts() {
        try {
            const appliedPunkts = await this.prismaService.applyForPunkt.findMany({
                where: { status: "REPAIRING" },
            });
            return appliedPunkts;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async changeToRepair(punktId) {
        try {
            const appliedPunkt = await this.prismaService.applyForPunkt.update({
                where: { id: punktId },
                data: { status: "REPAIRING" },
            });
            return appliedPunkt;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async get_one_repairing_punkt(id) {
        try {
            const repairingPunkt = await this.prismaService.applyForPunkt.findUnique({
                where: { id },
            });
            return repairingPunkt;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deletePunkt(punktId) {
        try {
            const deletedPunkt = await this.prismaService.applyForPunkt.delete({
                where: {
                    id: punktId,
                },
            });
            return deletedPunkt;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AppliesService = AppliesService;
exports.AppliesService = AppliesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppliesService);
//# sourceMappingURL=applies.service.js.map