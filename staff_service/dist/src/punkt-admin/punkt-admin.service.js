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
exports.PunktAdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PunktAdminService = class PunktAdminService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createPunktAdminDto) {
        const { username } = createPunktAdminDto;
        console.log({ createPunktAdminDto });
        const existUsername = await this.prismaService.punktAdmin.findUnique({
            where: { username },
        });
        if (existUsername) {
            throw new common_1.HttpException("This username already exist", common_1.HttpStatus.CONFLICT);
        }
        const punktAdmin = await this.prismaService.punktAdmin.create({
            data: Object.assign({}, createPunktAdminDto),
        });
        return punktAdmin;
    }
    findAll() {
        return `This action returns all punktAdmin`;
    }
    async findOne(id) {
        try {
            const punktAdmin = await this.prismaService.punktAdmin.findUnique({
                where: { id },
            });
            return punktAdmin;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updatePunktAdminDto) {
        try {
            console.log(id, updatePunktAdminDto);
            const punktAdmin = await this.prismaService.punktAdmin.update({
                where: { id },
                data: Object.assign({}, updatePunktAdminDto),
            });
            return punktAdmin;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id) {
        return `This action removes a #${id} punktAdmin`;
    }
};
exports.PunktAdminService = PunktAdminService;
exports.PunktAdminService = PunktAdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PunktAdminService);
//# sourceMappingURL=punkt-admin.service.js.map