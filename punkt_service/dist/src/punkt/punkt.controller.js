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
exports.PunktController = void 0;
const common_1 = require("@nestjs/common");
const punkt_service_1 = require("./punkt.service");
const create_punkt_dto_1 = require("./dto/create-punkt.dto");
const update_punkt_dto_1 = require("./dto/update-punkt.dto");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
let PunktController = class PunktController {
    constructor(punktService) {
        this.punktService = punktService;
    }
    create(createPunktDto) {
        return this.punktService.create(createPunktDto);
    }
    findAll() {
        return this.punktService.findAll();
    }
    findOne(id) {
        return this.punktService.findOne(id);
    }
    update(id, updatePunktDto) {
        return this.punktService.update(id, updatePunktDto);
    }
    remove(id) {
        return this.punktService.remove(id);
    }
    async getOne(id) {
        console.log("Message came to get_one_punkt ", { id });
        return this.punktService.findOne(id);
    }
    async getAll() {
        console.log("Message came to get_all_punkts");
        return this.punktService.findAll();
    }
    getAppliedPunkts() {
        return this.punktService.getAppliedPunkts();
    }
    getRepairingPunkts() {
        return this.punktService.getRepairingPunkts();
    }
    changeToRepair(punktId) {
        return this.punktService.changeToRepair(punktId);
    }
};
exports.PunktController = PunktController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create new punkt" }),
    (0, swagger_1.ApiBody)({ type: create_punkt_dto_1.CreatePunktDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Punkt created successfully" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_punkt_dto_1.CreatePunktDto]),
    __metadata("design:returntype", void 0)
], PunktController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all punkts" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Returns all punkts" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PunktController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get punkt by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Returns a single punkt" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PunktController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update punkt by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", type: String }),
    (0, swagger_1.ApiBody)({ type: update_punkt_dto_1.UpdatePunktDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Punkt updated successfully" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_punkt_dto_1.UpdatePunktDto]),
    __metadata("design:returntype", void 0)
], PunktController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete punkt by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Punkt deleted successfully" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PunktController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_one_punkt"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PunktController.prototype, "getOne", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_all_punkts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PunktController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("appliedPunkts/getAll"),
    (0, swagger_1.ApiOperation)({ summary: "Get applied punkts" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Returns a multi punkts" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PunktController.prototype, "getAppliedPunkts", null);
__decorate([
    (0, common_1.Get)("repairingPunkts/getAll"),
    (0, swagger_1.ApiOperation)({ summary: "Get repairing punkts" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Returns a multi punkts" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PunktController.prototype, "getRepairingPunkts", null);
__decorate([
    (0, common_1.Patch)("appliedPunkts/changeToRepair/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Change applied punkt to repairing" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Change applied punkt to repairing",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PunktController.prototype, "changeToRepair", null);
exports.PunktController = PunktController = __decorate([
    (0, swagger_1.ApiTags)("punkt_service/punkt"),
    (0, common_1.Controller)("punkt"),
    __metadata("design:paramtypes", [punkt_service_1.PunktService])
], PunktController);
//# sourceMappingURL=punkt.controller.js.map