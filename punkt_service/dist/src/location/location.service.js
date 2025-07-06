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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let LocationService = class LocationService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createProvinceDto) {
        try {
            console.log("request came to locations controller ", {
                createProvinceDto,
            });
            const { title } = createProvinceDto;
            const existProvince = await this.prismaService.province.findUnique({
                where: { title },
            });
            if (existProvince) {
                throw new common_1.HttpException("This province already exist", common_1.HttpStatus.CONFLICT);
            }
            const createdProvince = await this.prismaService.province.create({
                data: { title },
            });
            console.log({ createdProvince });
            return createdProvince;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        const provinces = await this.prismaService.province.findMany({
            include: {
                cities: true,
            },
        });
        return provinces;
    }
    async findOne(id) {
        const province = await this.prismaService.province.findUnique({
            where: { id },
            include: {
                cities: true,
            },
        });
        return province;
    }
    async update(id, updateLocationDto) {
        try {
            const updatedProvince = await this.prismaService.province.update({
                where: { id },
                data: Object.assign({}, updateLocationDto),
            });
            return updatedProvince;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const provinceCities = await this.prismaService.city.findMany({
                where: {
                    parenProvinceId: id,
                },
                select: {
                    id: true,
                },
            });
            provinceCities.forEach(async (item) => {
                await this.prismaService.city.delete({
                    where: { id: item.id },
                });
            });
            const deletedProvince = await this.prismaService.province.delete({
                where: { id },
            });
            return deletedProvince;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createCity(createCityDto) {
        try {
            const { title, parenProvinceId } = createCityDto;
            const existProvince = await this.prismaService.province.findUnique({
                where: { id: parenProvinceId },
            });
            if (!existProvince) {
                throw new common_1.HttpException("This province not found", common_1.HttpStatus.NOT_FOUND);
            }
            const existCity = await this.prismaService.city.findFirst({
                where: {
                    parenProvinceId,
                    title,
                },
            });
            if (existCity) {
                throw new common_1.HttpException("This city already exist", common_1.HttpStatus.CONFLICT);
            }
            const createdCity = await this.prismaService.city.create({
                data: { title, parenProvinceId },
            });
            return createdCity;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async removeCity(id) {
        try {
            const deletedCity = await this.prismaService.city.delete({
                where: { id },
            });
            return deletedCity;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAllCitiesByProvince(provinceId) {
        const cities = await this.prismaService.city.findMany({
            where: { parenProvinceId: provinceId },
        });
        return cities;
    }
};
exports.LocationService = LocationService;
exports.LocationService = LocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LocationService);
//# sourceMappingURL=location.service.js.map