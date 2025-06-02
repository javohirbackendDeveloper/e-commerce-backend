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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const createToken_1 = require("../token/createToken");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserService = UserService_1 = class UserService {
    constructor(configService, prismaService, jwtService) {
        this.configService = configService;
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async userRegister(createUserDto) {
        try {
            const { password, phone_number, username } = createUserDto;
            const user = await this.prismaService.user.findUnique({
                where: { username },
            });
            if (user) {
                throw new common_1.HttpException("This user already exist with this username", common_1.HttpStatus.BAD_REQUEST);
            }
            const hashedPassword = await (0, bcryptjs_1.hash)(password, 10);
            const createdUser = await this.prismaService.user.create({
                data: { password: hashedPassword, username, phone_number },
                select: {
                    id: true,
                    password: false,
                    phone_number: true,
                    username: true,
                },
            });
            return createdUser;
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
    async login(userLoginDto, response) {
        try {
            const { password, username } = userLoginDto;
            const existUser = await this.prismaService.user.findUnique({
                where: { username },
            });
            if (!existUser) {
                throw new common_1.HttpException("This user not found with this username", common_1.HttpStatus.BAD_REQUEST);
            }
            const passwordChecker = await (0, bcryptjs_1.compare)(password, existUser.password);
            if (!passwordChecker) {
                throw new common_1.HttpException("You are entering invalid password", common_1.HttpStatus.BAD_REQUEST);
            }
            const payloadForTokens = { id: existUser.id, role: existUser.role };
            const tokenClass = new createToken_1.CreateToken(this.configService, payloadForTokens.id, payloadForTokens.role);
            const { accessToken, refreshToken } = await tokenClass.createTokens(response);
            return { accessToken, refreshToken, message: "Siz tizimga kirdingiz" };
        }
        catch (err) {
            this.logger.error(`User login failed : ${err.message} `, err.stack);
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                this.logger.error("Prisma error code " + err.code);
                throw new common_1.ConflictException("Prisma error ");
            }
            throw new common_1.HttpException({
                message: "Something went wrong please try again",
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUser(id) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: { id },
            });
            if (!user) {
                throw new common_1.HttpException("This user not found with this id " + id, common_1.HttpStatus.NOT_FOUND);
            }
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getUsers() {
        try {
            const user = await this.prismaService.user.findMany();
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async refreshToken(req, res) {
        var _a;
        try {
            const refreshToken = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.user_refresh_token;
            const decode = await this.jwtService.verify(refreshToken, {
                secret: this.configService.get("USER_REFRESH_TOKEN_SECRET"),
            });
            const user = await this.prismaService.user.findUnique({
                where: { id: decode.id },
            });
            if (!user) {
                throw new common_1.HttpException("This user not found with this id " + decode.id, common_1.HttpStatus.NOT_FOUND);
            }
            const payloadForTokens = { id: user.id, role: user.role };
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
        res.clearCookie("user_access_token");
        res.clearCookie("user_refresh_token");
        return { message: "Successfully logged out" };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map