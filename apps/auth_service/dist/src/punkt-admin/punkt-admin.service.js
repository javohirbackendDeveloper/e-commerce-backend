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
var PunktAdminService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PunktAdminService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const createToken_1 = require("../token/createToken");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let PunktAdminService = PunktAdminService_1 = class PunktAdminService {
    constructor(configService, prismaService, jwtService) {
        this.configService = configService;
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(PunktAdminService_1.name);
    }
    async adminRegister(createAdminDto) {
        try {
            const { password, phone_number, username } = createAdminDto;
            const admin = await this.prismaService.punktAdmin.findUnique({
                where: { username },
            });
            if (admin) {
                throw new common_1.HttpException("This punkt admin already exist with this username", common_1.HttpStatus.BAD_REQUEST);
            }
            const hashedPassword = await (0, bcryptjs_1.hash)(password, 10);
            const createdAdmin = await this.prismaService.punktAdmin.create({
                data: { password: hashedPassword, username, phone_number },
                select: {
                    id: true,
                    password: false,
                    phone_number: true,
                    username: true,
                },
            });
            return {
                message: "Punkt Admin muvaffaqiyatli yaratildi",
                success: true,
                statusCode: 201,
                data: createdAdmin,
            };
        }
        catch (error) {
            this.logger.error(`Registration failed : ${error.message}`, error.stack);
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                this.logger.error(`Prisma Error code :  ${error.code}`);
                throw new common_1.ConflictException("Prisma Error");
            }
            throw new common_1.HttpException({
                message: "Something went wrong please try again later",
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(adminLoginDto, response) {
        try {
            const { password, username } = adminLoginDto;
            const existAdmin = await this.prismaService.punktAdmin.findUnique({
                where: { username },
            });
            if (!existAdmin) {
                throw new common_1.HttpException("This punkt admin not found with this username", common_1.HttpStatus.BAD_REQUEST);
            }
            const passwordChecker = await (0, bcryptjs_1.compare)(password, existAdmin.password);
            if (!passwordChecker) {
                throw new common_1.HttpException("You are entering invalid password", common_1.HttpStatus.BAD_REQUEST);
            }
            const payloadForTokens = { id: existAdmin.id, role: existAdmin.role };
            const tokenClass = new createToken_1.CreateToken(this.configService, payloadForTokens.id, payloadForTokens.role);
            const { accessToken, refreshToken } = await tokenClass.createTokens(response);
            return { accessToken, refreshToken, message: "Siz tizimga kirdingiz" };
        }
        catch (err) {
            this.logger.error(`Admin login failed : ${err.message} `, err.stack);
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                this.logger.error("Prisma error code " + err.code);
                throw new common_1.ConflictException("Prisma error ");
            }
            throw new common_1.HttpException({
                message: "Something went wrong please try again",
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async refreshToken(req, res) {
        var _a;
        try {
            const refreshToken = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.punktAdmin_refresh_token;
            const decode = await this.jwtService.verify(refreshToken, {
                secret: this.configService.get("PUNKTADMIN_REFRESH_TOKEN_SECRET"),
            });
            const admin = await this.prismaService.punktAdmin.findUnique({
                where: { id: decode.id },
            });
            if (!admin) {
                throw new common_1.HttpException("This punkts admin not found with this id " + decode.id, common_1.HttpStatus.NOT_FOUND);
            }
            const payloadForTokens = { id: admin.id, role: admin.role };
            const tokenCreater = new createToken_1.CreateToken(this.configService, payloadForTokens.id, payloadForTokens.role);
            const { accessToken } = await tokenCreater.createTokens(res, false);
            return {
                accessToken,
                refreshToken,
                message: "Access token successfully refreshed",
            };
        }
        catch (error) {
            this.logger.error("Error on refresh token " + error.message, error.stack);
            throw new Error(error);
        }
    }
    async logoutAdmin(res) {
        res.clearCookie("punktadmin_access_token");
        res.clearCookie("punktadmin_refresh_token");
        return { message: "Successfully logged out" };
    }
};
exports.PunktAdminService = PunktAdminService;
exports.PunktAdminService = PunktAdminService = PunktAdminService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService,
        jwt_1.JwtService])
], PunktAdminService);
//# sourceMappingURL=punkt-admin.service.js.map