"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyBotModule = void 0;
const common_1 = require("@nestjs/common");
const apply_bot_service_1 = require("./apply-bot.service");
const apply_bot_controller_1 = require("./apply-bot.controller");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const prisma_service_1 = require("../../prisma/prisma.service");
const tezbuy_packages_1 = require("tezbuy_packages");
const services_1 = require("../constants/services");
const BOTTOKEN = process.env.PUNKT_BOT_TOKEN;
let ApplyBotModule = class ApplyBotModule {
};
exports.ApplyBotModule = ApplyBotModule;
exports.ApplyBotModule = ApplyBotModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_telegraf_1.TelegrafModule.forRoot({
                token: BOTTOKEN,
                middlewares: [(0, telegraf_1.session)()],
            }),
            tezbuy_packages_1.RmqModule.register({
                name: services_1.PUNKT_SERVICE,
            }),
        ],
        controllers: [],
        providers: [apply_bot_service_1.ApplyBotService, apply_bot_controller_1.ApplyBotController, prisma_service_1.PrismaService],
    })
], ApplyBotModule);
//# sourceMappingURL=apply-bot.module.js.map