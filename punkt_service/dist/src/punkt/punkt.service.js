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
exports.PunktService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const microservices_1 = require("@nestjs/microservices");
const prisma_service_1 = require("../../prisma/prisma.service");
const axios_1 = require("@nestjs/axios");
let PunktService = class PunktService {
    constructor(punktClient, staffClient, punktbotClient, prismaService, httpService) {
        this.punktClient = punktClient;
        this.staffClient = staffClient;
        this.punktbotClient = punktbotClient;
        this.prismaService = prismaService;
        this.httpService = httpService;
    }
    async create(createPunktDto) {
        try {
            const { punktAdminId, canTryOn, repairingPunktId, workingHours } = createPunktDto;
            const repairingPunkt = await (0, rxjs_1.firstValueFrom)(this.punktbotClient.send("get_one_repairing_punkt", repairingPunktId));
            const { latitude, longitude, province, city } = repairingPunkt;
            const existPunkt = await this.prismaService.punkt.findFirst({
                where: {
                    locationLatitude: latitude,
                    locationLongitude: longitude,
                },
            });
            if (existPunkt) {
                throw new common_1.HttpException("This punkt already exist in this zone", common_1.HttpStatus.CONFLICT);
            }
            const punktAdmin = await (0, rxjs_1.firstValueFrom)(this.staffClient.send("get_one_punktAdmin", punktAdminId));
            if (!punktAdmin) {
                throw new common_1.HttpException("This punkt admin not found with this id " + punktAdminId, common_1.HttpStatus.NOT_FOUND);
            }
            if (punktAdmin.punktId) {
                throw new common_1.HttpException("This punkt admin working in other punkt", common_1.HttpStatus.CONFLICT);
            }
            const otherPunkts = await this.prismaService.punkt.findMany({
                select: {
                    id: true,
                },
            });
            const locationText = await this.findTextOfLocation(latitude, longitude);
            const dataToCreate = {
                name: `${otherPunkts.length + 1}-punkt`,
                city: city,
                region: province,
                canTryOn: canTryOn,
                punktAdminId: punktAdminId,
                locationLatitude: latitude,
                locationLongitude: longitude,
                locationText: locationText,
            };
            const punkt = await this.prismaService.punkt.create({
                data: Object.assign({}, dataToCreate),
            });
            await (0, rxjs_1.firstValueFrom)(this.punktbotClient.send("deletePunkt", repairingPunktId));
            const createdWorkingHours = [];
            workingHours.forEach(async (time) => {
                const createdWorkingHour = await this.prismaService.workingHours.create({
                    data: {
                        end_time: time.end_time,
                        start_time: time.start_time,
                        punktId: punkt.id,
                        day: time.day,
                    },
                });
                createdWorkingHours.push(createdWorkingHour);
            });
            const updatedPunktAdmin = await (0, rxjs_1.firstValueFrom)(this.staffClient.send("update_one_punktAdmin", {
                id: punktAdmin.id,
                data: {
                    punktId: punkt.id,
                },
            }));
            return punkt;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findTextOfLocation(lat, long) {
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.request({
            method: "GET",
            url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&accept-language=uz
`,
        }));
        return response.data.display_name;
    }
    async findAll() {
        try {
            const allPunkts = await this.prismaService.punkt.findMany({
                include: {
                    workingHours: true,
                },
            });
            return allPunkts;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const punkt = await this.prismaService.punkt.findUnique({
                where: { id },
            });
            return punkt;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server errror", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    update(id, updatePunktDto) {
        return `This action updates a #${id} punkt`;
    }
    remove(id) {
        return `This action removes a #${id} punkt`;
    }
    async getAppliedPunkts() {
        const appliedPunkts = await (0, rxjs_1.firstValueFrom)(this.punktbotClient.send("get_applies_punkts", ""));
        return appliedPunkts;
    }
    async getRepairingPunkts() {
        const repairingPunkts = await (0, rxjs_1.firstValueFrom)(this.punktbotClient.send("get_repairing_punkts", ""));
        return repairingPunkts;
    }
    async changeToRepair(punktId) {
        await (0, rxjs_1.firstValueFrom)(this.punktbotClient.send("changeToRepair", punktId));
    }
};
exports.PunktService = PunktService;
exports.PunktService = PunktService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PUNKT_SERVICE")),
    __param(1, (0, common_1.Inject)("STAFF_SERVICE")),
    __param(2, (0, common_1.Inject)("PUNKTBOT")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        prisma_service_1.PrismaService,
        axios_1.HttpService])
], PunktService);
//# sourceMappingURL=punkt.service.js.map