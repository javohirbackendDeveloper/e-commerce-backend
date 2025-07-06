"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PunktModule = void 0;
const common_1 = require("@nestjs/common");
const punkt_service_1 = require("./punkt.service");
const punkt_controller_1 = require("./punkt.controller");
const services_1 = require("../constants/services");
const tezbuy_packages_1 = require("tezbuy_packages");
const prisma_service_1 = require("../../prisma/prisma.service");
const axios_1 = require("@nestjs/axios");
let PunktModule = class PunktModule {
};
exports.PunktModule = PunktModule;
exports.PunktModule = PunktModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tezbuy_packages_1.RmqModule.register({
                name: services_1.PUNKT_SERVICE,
            }),
            tezbuy_packages_1.RmqModule.register({ name: services_1.ORDER_SERVICE }),
            tezbuy_packages_1.RmqModule.register({ name: services_1.STAFF_SERVICE }),
            tezbuy_packages_1.RmqModule.register({ name: services_1.PUNKTBOT }),
            axios_1.HttpModule,
        ],
        controllers: [punkt_controller_1.PunktController],
        providers: [punkt_service_1.PunktService, prisma_service_1.PrismaService],
    })
], PunktModule);
//# sourceMappingURL=punkt.module.js.map