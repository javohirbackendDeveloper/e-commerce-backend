"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const admin_module_1 = require("./admin/admin.module");
const punkt_admin_module_1 = require("./punkt-admin/punkt-admin.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const tezbuy_packages_1 = require("tezbuy_packages");
const metrics_module_1 = require("./metrics/metrics.module");
const metrics_service_1 = require("./metrics/metrics.service");
const metrics_interceptor_1 = require("./metrics/metrics.interceptor");
let AuthServiceModule = class AuthServiceModule {
};
exports.AuthServiceModule = AuthServiceModule;
exports.AuthServiceModule = AuthServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: "./apps/auth_service/.env",
                isGlobal: true,
            }),
            user_module_1.UserModule,
            admin_module_1.AdminModule,
            punkt_admin_module_1.PunktAdminModule,
            cloudinary_module_1.CloudinaryModule,
            metrics_module_1.MetricsModule,
        ],
        controllers: [],
        providers: [tezbuy_packages_1.RmqService, metrics_service_1.MetricsService, metrics_interceptor_1.MetricsInterceptor],
    })
], AuthServiceModule);
//# sourceMappingURL=auth-service.module.js.map