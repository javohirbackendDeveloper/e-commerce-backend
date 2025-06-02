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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const createAdmin_dto_1 = require("./dto/createAdmin.dto");
const swagger_1 = require("@nestjs/swagger");
const return_dto_1 = require("./dto/return.dto");
const admin_auth_guard_1 = require("../guards/admin-auth.guard");
const update_dto_1 = require("./dto/update.dto");
const platform_express_1 = require("@nestjs/platform-express");
const changePassword_dto_1 = require("./dto/changePassword.dto");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async createAdmin(createAdminDto) {
        return this.adminService.adminRegister(createAdminDto);
    }
    async loginAdmin(loginAdminDto, response) {
        return this.adminService.login(loginAdminDto, response);
    }
    async getAdmin(id) {
        return this.adminService.getAdmin(id);
    }
    async getAdmins() {
        return this.adminService.getAdmins();
    }
    async refreshToken(req, res) {
        return this.adminService.refreshToken(req, res);
    }
    async logoutAdmin(res) {
        return this.adminService.logoutAdmin(res);
    }
    async getAdminByToken(req) {
        const admin = req.admin;
        return admin;
    }
    async updateAdmin(req, data) {
        return this.adminService.updateAccount(req, data);
    }
    async uploadProfileImage(req, file) {
        console.log("Request came to here", file);
        return this.adminService.uploadProfileImage(file, req);
    }
    async deleteProfileImage(req) {
        return this.adminService.deleteProfileImage(req);
    }
    async changePassword(req, changePAsswordDto) {
        return this.adminService.changePassword(req, changePAsswordDto);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Register a new admin" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Admin has been successfully registered",
        type: return_dto_1.ReturnAdminDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Validation failed or bad request body",
    }),
    (0, common_1.Post)("register"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAdmin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Login an existing admin" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Admin successfully logged in. Token returned.",
        type: return_dto_1.ReturnAdminLoginDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Invalid login credentials or bad payload",
    }),
    (0, common_1.Post)("login"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAdmin_dto_1.AdminLoginDto, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "loginAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get admin details by ID" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Admin data retrieved successfully",
        type: return_dto_1.ReturnAdminDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Invalid ID or admin not found",
    }),
    (0, common_1.Get)("getAdmin/:id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get list of all registered admins" }),
    (0, swagger_1.ApiOkResponse)({
        description: "List of all admins retrieved successfully",
        type: [return_dto_1.ReturnAdminDto],
    }),
    (0, common_1.Get)("getAdmins"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAdmins", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "Generate new access token using refresh token",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "New access token generated",
        type: return_dto_1.ReturnAdminLoginDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Refresh token missing or invalid",
    }),
    (0, common_1.Post)("refreshToken"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "refreshToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Logout current admin" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Admin successfully logged out",
    }),
    (0, common_1.Post)("logout"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "logoutAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get admin details by token" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Admin data retrieved successfully",
        type: return_dto_1.ReturnAdminDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Invalid token or admin not found",
    }),
    (0, common_1.Get)("getAdminByToken"),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAdminByToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update admin details" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Admin data updated successfully",
        type: update_dto_1.UpdateAdmin,
    }),
    (0, common_1.Patch)("updateAdmin"),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_dto_1.UpdateAdmin]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update admin profile image" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Admin data updated successfully",
        type: update_dto_1.UpdateAdmin,
    }),
    (0, common_1.Patch)("updateProfileImage"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "uploadProfileImage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "delete admin profile image" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Admin data deleted successfully",
        type: update_dto_1.UpdateAdmin,
    }),
    (0, common_1.Patch)("deleteProfileImage"),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteProfileImage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "delete admin profile image" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Admin data deleted successfully",
        type: update_dto_1.UpdateAdmin,
    }),
    (0, common_1.Patch)("changePassword"),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, changePassword_dto_1.ChangePassword]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "changePassword", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)("auth_service/admin"),
    (0, common_1.Controller)("admin"),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map