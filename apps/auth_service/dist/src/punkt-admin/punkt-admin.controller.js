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
exports.PunktAdminController = void 0;
const common_1 = require("@nestjs/common");
const punkt_admin_service_1 = require("./punkt-admin.service");
const createPunktAdmin_dto_1 = require("./dto/createPunktAdmin.dto");
const swagger_1 = require("@nestjs/swagger");
const return_dto_1 = require("./dto/return.dto");
let PunktAdminController = class PunktAdminController {
    constructor(punktAdminService) {
        this.punktAdminService = punktAdminService;
    }
    async createAdmin(createAdminDto) {
        return this.punktAdminService.adminRegister(createAdminDto);
    }
    async loginAdmin(loginAdminDto, response) {
        return this.punktAdminService.login(loginAdminDto, response);
    }
    async refreshToken(req, res) {
        return this.punktAdminService.refreshToken(req, res);
    }
    async logoutAdmin(res) {
        return this.punktAdminService.logoutAdmin(res);
    }
};
exports.PunktAdminController = PunktAdminController;
__decorate([
    (0, common_1.Post)("register"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: "Register a new punkt admin" }),
    (0, swagger_1.ApiCreatedResponse)({ type: return_dto_1.ReturnPunktAdminDto }),
    (0, swagger_1.ApiBody)({ type: createPunktAdmin_dto_1.CreatePunktAdminDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPunktAdmin_dto_1.CreatePunktAdminDto]),
    __metadata("design:returntype", Promise)
], PunktAdminController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Post)("login"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: "Login for punkt admin" }),
    (0, swagger_1.ApiCreatedResponse)({ type: return_dto_1.ReturnLoginDto }),
    (0, swagger_1.ApiBody)({ type: createPunktAdmin_dto_1.PunktAdminLoginDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPunktAdmin_dto_1.PunktAdminLoginDto, Object]),
    __metadata("design:returntype", Promise)
], PunktAdminController.prototype, "loginAdmin", null);
__decorate([
    (0, common_1.Post)("refreshToken"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: "Refresh JWT token for punkt admin" }),
    (0, swagger_1.ApiOkResponse)({ type: return_dto_1.ReturnLoginDto }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PunktAdminController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)("logout"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: "Logout punkt admin" }),
    (0, swagger_1.ApiOkResponse)({ type: return_dto_1.ReturnLogoutDto }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PunktAdminController.prototype, "logoutAdmin", null);
exports.PunktAdminController = PunktAdminController = __decorate([
    (0, swagger_1.ApiTags)("auth_service/punkt-admin"),
    (0, common_1.Controller)("punkt_admin"),
    __metadata("design:paramtypes", [punkt_admin_service_1.PunktAdminService])
], PunktAdminController);
//# sourceMappingURL=punkt-admin.controller.js.map