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
var AdminService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const createToken_1 = require("../token/createToken");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let AdminService = AdminService_1 = class AdminService {
    constructor(configService, prismaService, jwtService, cloudinaryService) {
        this.configService = configService;
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.cloudinaryService = cloudinaryService;
        this.logger = new common_1.Logger(AdminService_1.name);
    }
    async adminRegister(createAdminDto) {
        try {
            const { password, phone_number, username } = createAdminDto;
            const admin = await this.prismaService.admin.findUnique({
                where: { username },
            });
            if (admin) {
                throw new common_1.HttpException("This admin already exist with this username", common_1.HttpStatus.BAD_REQUEST);
            }
            const hashedPassword = await (0, bcryptjs_1.hash)(password, 10);
            const createdAdmin = await this.prismaService.admin.create({
                data: { password: hashedPassword, username, phone_number },
                select: {
                    id: true,
                    password: false,
                    phone_number: true,
                    username: true,
                },
            });
            return {
                message: "Siz muvaffaqiyatli ro'yxatdan o'tdingiz",
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
            const existAdmin = await this.prismaService.admin.findUnique({
                where: { username },
            });
            if (!existAdmin) {
                throw new common_1.HttpException("This admin not found with this username", common_1.HttpStatus.BAD_REQUEST);
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
    async getAdmin(id) {
        try {
            const admin = await this.prismaService.admin.findUnique({
                where: { id },
            });
            if (!admin) {
                throw new common_1.HttpException("This admin not found with this id " + id, common_1.HttpStatus.NOT_FOUND);
            }
            return admin;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getAdmins() {
        try {
            const admin = await this.prismaService.admin.findMany();
            return admin;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async refreshToken(req, res) {
        var _a;
        try {
            const refreshToken = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.admin_refresh_token;
            const decode = await this.jwtService.verify(refreshToken, {
                secret: this.configService.get("ADMIN_REFRESH_TOKEN_SECRET"),
            });
            const admin = await this.prismaService.admin.findUnique({
                where: { id: decode.id },
            });
            if (!admin) {
                throw new common_1.HttpException("This admin not found with this id " + decode.id, common_1.HttpStatus.NOT_FOUND);
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
        res.clearCookie("admin_access_token");
        res.clearCookie("admin_refresh_token");
        return { message: "Successfully logged out" };
    }
    async updateAccount(req, data) {
        try {
            const existAdmin = req === null || req === void 0 ? void 0 : req.admin;
            if (!existAdmin) {
                throw new common_1.HttpException("This admin not found", common_1.HttpStatus.NOT_FOUND);
            }
            console.log({ data });
            const admin = await this.prismaService.admin.update({
                where: { id: existAdmin.id },
                data: Object.assign({}, data),
            });
            return admin;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async uploadProfileImage(file, req) {
        try {
            const existAdmin = req === null || req === void 0 ? void 0 : req.admin;
            if (!existAdmin) {
                throw new common_1.HttpException("This admin not found", common_1.HttpStatus.NOT_FOUND);
            }
            let imageUrl = null;
            if (file) {
                imageUrl = await this.cloudinaryService.uploadFile(file, "Admin");
                console.log({ imageUrl });
                const admin = await this.prismaService.admin.update({
                    where: { id: existAdmin.id },
                    data: { profileImg: imageUrl || "" },
                });
                return admin;
            }
            else {
                throw new common_1.HttpException("Please upload profile image", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteProfileImage(req) {
        try {
            const existAdmin = req === null || req === void 0 ? void 0 : req.admin;
            if (!existAdmin) {
                throw new common_1.HttpException("This admin not found", common_1.HttpStatus.NOT_FOUND);
            }
            const admin = await this.prismaService.admin.update({
                where: { id: existAdmin.id },
                data: { profileImg: "" },
            });
            await this.cloudinaryService.deleteImage(existAdmin.profileImg);
            return admin;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async changePassword(req, changePassword) {
        try {
            const { currentPassword, newPassword } = changePassword;
            const existAdmin = req === null || req === void 0 ? void 0 : req.admin;
            if (!existAdmin) {
                throw new common_1.HttpException("This admin not found", common_1.HttpStatus.NOT_FOUND);
            }
            const verifiedPassword = await (0, bcryptjs_1.compare)(currentPassword, existAdmin.password);
            if (!verifiedPassword) {
                throw new common_1.HttpException("You entered current password is wrong", common_1.HttpStatus.BAD_REQUEST);
            }
            const hashedPassword = await (0, bcryptjs_1.hash)(newPassword, 10);
            const admin = await this.prismaService.admin.update({
                where: { id: existAdmin.id },
                data: { password: hashedPassword },
            });
            return admin;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = AdminService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService,
        jwt_1.JwtService,
        cloudinary_service_1.CloudinaryService])
], AdminService);
//# sourceMappingURL=admin.service.js.map