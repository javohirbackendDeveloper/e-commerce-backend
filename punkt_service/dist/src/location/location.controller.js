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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("./location.service");
const update_location_dto_1 = require("./dto/update-location.dto");
const create_location_dto_1 = require("./dto/create-location.dto");
const microservices_1 = require("@nestjs/microservices");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    create(createProvinceDto) {
        return this.locationService.create(createProvinceDto);
    }
    findAll() {
        return this.locationService.findAll();
    }
    findOne(id) {
        return this.locationService.findOne(id);
    }
    update(id, updateLocationDto) {
        return this.locationService.update(id, updateLocationDto);
    }
    remove(id) {
        return this.locationService.remove(id);
    }
    createCity(createCityDto) {
        return this.locationService.createCity(createCityDto);
    }
    removeCity(id) {
        return this.locationService.removeCity(id);
    }
    async getAllProvinces() {
        return this.locationService.findAll();
    }
    async getCitiesByProvince(provinceId) {
        return this.locationService.findAllCitiesByProvince(provinceId);
    }
};
exports.LocationController = LocationController;
__decorate([
    (0, common_1.Post)("province"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_location_dto_1.CreateProvinceDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("province"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("province/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)("province/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_location_dto_1.UpdateLocationDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("province/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("city"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_location_dto_1.CreateCityDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "createCity", null);
__decorate([
    (0, common_1.Delete)("city/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "removeCity", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_provinces"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getAllProvinces", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_cities_by_province"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getCitiesByProvince", null);
exports.LocationController = LocationController = __decorate([
    (0, common_1.Controller)("location"),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
//# sourceMappingURL=location.controller.js.map