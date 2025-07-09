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
exports.PunktAdminController = void 0;
const common_1 = require("@nestjs/common");
const punkt_admin_service_1 = require("./punkt-admin.service");
const create_punkt_admin_dto_1 = require("./dto/create-punkt-admin.dto");
const update_punkt_admin_dto_1 = require("./dto/update-punkt-admin.dto");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
let PunktAdminController = class PunktAdminController {
    constructor(punktAdminService) {
        this.punktAdminService = punktAdminService;
    }
    create(createPunktAdminDto) {
        return this.punktAdminService.create(createPunktAdminDto);
    }
    enterToAccount(enterAccountDto) {
        return this.punktAdminService.enterToAccount(enterAccountDto);
    }
    findAll() {
        return this.punktAdminService.findAll();
    }
    findOne(id) {
        return this.punktAdminService.findOne(id);
    }
    update(id, updatePunktAdminDto) {
        return this.punktAdminService.update(id, updatePunktAdminDto);
    }
    remove(id) {
        return this.punktAdminService.remove(+id);
    }
    async getOne(id) {
        return this.punktAdminService.findOne(id);
    }
    async updateOne(payload) {
        const { id, data } = payload;
        return this.punktAdminService.update(id, data);
    }
};
exports.PunktAdminController = PunktAdminController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new punkt admin" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_punkt_admin_dto_1.CreatePunktAdminDto]),
    __metadata("design:returntype", void 0)
], PunktAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("enterToAccount"),
    (0, swagger_1.ApiOperation)({ summary: "Create a new punkt admin" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_punkt_admin_dto_1.EnterAccountDto]),
    __metadata("design:returntype", void 0)
], PunktAdminController.prototype, "enterToAccount", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all punkt admins" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PunktAdminController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get punkt admin by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", type: String, description: "Punkt Admin ID" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PunktAdminController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update punkt admin by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", type: String, description: "Punkt Admin ID" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_punkt_admin_dto_1.UpdatePunktAdminDto]),
    __metadata("design:returntype", void 0)
], PunktAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete punkt admin by ID" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        type: Number,
        description: "Punkt Admin ID (number)",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PunktAdminController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)("get_one_punktAdmin"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PunktAdminController.prototype, "getOne", null);
__decorate([
    (0, microservices_1.MessagePattern)("update_one_punktAdmin"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PunktAdminController.prototype, "updateOne", null);
exports.PunktAdminController = PunktAdminController = __decorate([
    (0, swagger_1.ApiTags)("staff_service/punkt-admin"),
    (0, common_1.Controller)("punkt-admin"),
    __metadata("design:paramtypes", [punkt_admin_service_1.PunktAdminService])
], PunktAdminController);
//# sourceMappingURL=punkt-admin.controller.js.map