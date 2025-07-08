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
exports.UserPunktService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserPunktService = class UserPunktService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createUserPunktDto) {
        return "This action adds a new userPunkt";
    }
    async findAllPunktCities() {
        try {
            const punkts = await this.prismaService.punkt.findMany({
                select: {
                    city: true,
                },
            });
            const uniqueCities = [];
            punkts.forEach((punkt) => {
                if (!uniqueCities.includes(punkt.city)) {
                    uniqueCities.push(punkt.city);
                }
            });
            return uniqueCities;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findByCity(cityName) {
        try {
            const punkts = await this.prismaService.punkt.findMany({
                where: { city: cityName },
                include: {
                    workingHours: true,
                },
            });
            return punkts;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    update(id, updateUserPunktDto) {
        return `This action updates a #${id} userPunkt`;
    }
    remove(id) {
        return `This action removes a #${id} userPunkt`;
    }
};
exports.UserPunktService = UserPunktService;
exports.UserPunktService = UserPunktService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserPunktService);
//# sourceMappingURL=user_punkt.service.js.map