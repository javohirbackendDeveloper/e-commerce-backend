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
exports.AdminGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const admin_service_1 = require("../admin/admin.service");
const config_1 = require("@nestjs/config");
let AdminGuard = class AdminGuard {
    constructor(jwtService, adminService, configService) {
        this.jwtService = jwtService;
        this.adminService = adminService;
        this.configService = configService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.cookies.admin_access_token;
        if (!token) {
            return false;
        }
        const decode = await this.jwtService.verifyAsync(token, {
            secret: this.configService.get("ADMIN_ACCESS_TOKEN_SECRET"),
        });
        if (!(decode === null || decode === void 0 ? void 0 : decode.id)) {
            return false;
        }
        const admin = await this.adminService.getAdmin(decode.id);
        if (!admin)
            return false;
        request.admin = admin;
        return admin.role === "Admin";
    }
};
exports.AdminGuard = AdminGuard;
exports.AdminGuard = AdminGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        admin_service_1.AdminService,
        config_1.ConfigService])
], AdminGuard);
//# sourceMappingURL=admin-auth.guard.js.map