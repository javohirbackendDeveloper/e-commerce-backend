"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffServiceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const tezbuy_packages_1 = require("tezbuy_packages");
const apply_bot_module_1 = require("./apply-bot/apply-bot.module");
const applies_module_1 = require("./applies/applies.module");
let StaffServiceModule = class StaffServiceModule {
};
exports.StaffServiceModule = StaffServiceModule;
exports.StaffServiceModule = StaffServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ".env",
                isGlobal: true,
            }),
            tezbuy_packages_1.RmqModule.register({
                name: "PUNKT_SERVICE",
            }),
            apply_bot_module_1.ApplyBotModule,
            applies_module_1.AppliesModule,
        ],
        controllers: [],
        providers: [tezbuy_packages_1.RmqService, prisma_service_1.PrismaService],
    })
], StaffServiceModule);
//# sourceMappingURL=punktbot.module.js.map