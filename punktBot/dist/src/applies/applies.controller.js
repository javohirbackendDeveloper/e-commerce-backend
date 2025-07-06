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
exports.AppliesController = void 0;
const common_1 = require("@nestjs/common");
const applies_service_1 = require("./applies.service");
const microservices_1 = require("@nestjs/microservices");
let AppliesController = class AppliesController {
    constructor(appliesService) {
        this.appliesService = appliesService;
    }
    async getAppliedPunkts() {
        return this.appliesService.getAppliedPunkts();
    }
    async getRepairingPunkts() {
        return this.appliesService.getRepairingPunkts();
    }
    async get_one_repairing_punkt(id) {
        return this.appliesService.get_one_repairing_punkt(id);
    }
    async changeToRepair(punktId) {
        return this.appliesService.changeToRepair(punktId);
    }
    async deletePunkt(punktId) {
        return this.appliesService.deletePunkt(punktId);
    }
};
exports.AppliesController = AppliesController;
__decorate([
    (0, microservices_1.MessagePattern)("get_applies_punkts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppliesController.prototype, "getAppliedPunkts", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_repairing_punkts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppliesController.prototype, "getRepairingPunkts", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_one_repairing_punkt"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppliesController.prototype, "get_one_repairing_punkt", null);
__decorate([
    (0, microservices_1.MessagePattern)("changeToRepair"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppliesController.prototype, "changeToRepair", null);
__decorate([
    (0, microservices_1.MessagePattern)("deletePunkt"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppliesController.prototype, "deletePunkt", null);
exports.AppliesController = AppliesController = __decorate([
    (0, common_1.Controller)("applies"),
    __metadata("design:paramtypes", [applies_service_1.AppliesService])
], AppliesController);
//# sourceMappingURL=applies.controller.js.map