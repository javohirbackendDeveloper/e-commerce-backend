"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PunktServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const punkt_module_1 = require("./punkt/punkt.module");
const tezbuy_packages_1 = require("tezbuy_packages");
const location_module_1 = require("./location/location.module");
const user_punkt_module_1 = require("./user_punkt/user_punkt.module");
let PunktServiceModule = class PunktServiceModule {
};
exports.PunktServiceModule = PunktServiceModule;
exports.PunktServiceModule = PunktServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: "./apps/punkt_service/.env",
                isGlobal: true,
            }),
            punkt_module_1.PunktModule,
            location_module_1.LocationModule,
            user_punkt_module_1.UserPunktModule,
        ],
        controllers: [],
        providers: [tezbuy_packages_1.RmqService],
    })
], PunktServiceModule);
//# sourceMappingURL=punkt_service.module.js.map