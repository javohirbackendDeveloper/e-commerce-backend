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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
    async enterToAccount(enterToAccountDto) {
        try {
            const { password, username } = enterToAccountDto;
            const existAdmin = await this.prismaService.punktAdmin.findUnique({
                where: { username },
            });
            if (!existAdmin) {
                throw new common_1.HttpException("This punkt admin not found with this username", common_1.HttpStatus.BAD_REQUEST);
            }
            const { password: passwordOfAdmin } = existAdmin, otherData = __rest(existAdmin, ["password"]);
            const passwordChecker = password === existAdmin.password ? true : false;
            if (!passwordChecker) {
                throw new common_1.HttpException("You are entering invalid password", common_1.HttpStatus.BAD_REQUEST);
            }
            return { otherData };
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
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