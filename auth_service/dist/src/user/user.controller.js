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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const createUser_dto_1 = require("./dto/createUser.dto");
const user_auth_guard_1 = require("../guards/user-auth.guard");
const admin_auth_guard_1 = require("../guards/admin-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const return_dto_1 = require("./dto/return.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(createUserDto) {
        return this.userService.userRegister(createUserDto);
    }
    async loginUser(loginUserDto, response) {
        return this.userService.login(loginUserDto, response);
    }
    async getUser(id) {
        return this.userService.getUser(id);
    }
    async getUsers() {
        return this.userService.getUsers();
    }
    async refreshToken(req, res) {
        return this.userService.refreshToken(req, res);
    }
    async logoutAdmin(res) {
        return this.userService.logoutAdmin(res);
    }
    async getUserByToken(req) {
        console.log();
        const user = req.user;
        return user;
    }
    async keepHealthServer(res) {
        return this.userService.keepHealthServer(res);
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Register a new user" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "User registered successfully",
        type: return_dto_1.ReturnUserDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Validation error or bad request",
    }),
    (0, common_1.Post)("register"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Login a user" }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: "User successfully logged in",
        type: return_dto_1.ReturnLoginUserDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Invalid login credentials or bad payload",
    }),
    (0, common_1.Post)("login"),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.UserLoginDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get a user by ID (Admin only)" }),
    (0, swagger_1.ApiOkResponse)({
        description: "User data retrieved successfully",
        type: return_dto_1.ReturnUserDto,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: "Unauthorized: Admin access only" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminGuard),
    (0, common_1.Get)("getUser/:id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get list of all users (Admin only)" }),
    (0, swagger_1.ApiOkResponse)({
        description: "All users retrieved successfully",
        type: [return_dto_1.ReturnUserDto],
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: "Unauthorized: Admin access only" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminGuard),
    (0, common_1.Get)("getUsers"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "Generate new access token from refresh token",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "New access token generated",
        type: return_dto_1.ReturnLoginUserDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Invalid or missing refresh token" }),
    (0, common_1.Post)("refreshToken"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "refreshToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Logout user" }),
    (0, swagger_1.ApiOkResponse)({ description: "User successfully logged out" }),
    (0, common_1.Post)("logout"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "logoutAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get user details by token" }),
    (0, swagger_1.ApiOkResponse)({
        description: "User data retrieved successfully",
        type: return_dto_1.ReturnUserDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Invalid token or user not found",
    }),
    (0, common_1.Get)("getUserByToken"),
    (0, common_1.UseGuards)(user_auth_guard_1.UserGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByToken", null);
__decorate([
    (0, common_1.Get)("keepHealthServer"),
    (0, swagger_1.ApiOperation)({ summary: "Keep server from auto sleep" }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "keepHealthServer", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)("auth_service/user"),
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map