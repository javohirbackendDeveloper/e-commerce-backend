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
exports.UserPunktController = void 0;
const common_1 = require("@nestjs/common");
const user_punkt_service_1 = require("./user_punkt.service");
const create_user_punkt_dto_1 = require("./dto/create-user_punkt.dto");
const update_user_punkt_dto_1 = require("./dto/update-user_punkt.dto");
const swagger_1 = require("@nestjs/swagger");
let UserPunktController = class UserPunktController {
    constructor(userPunktService) {
        this.userPunktService = userPunktService;
    }
    create(createUserPunktDto) {
        return this.userPunktService.create(createUserPunktDto);
    }
    findAllPunktCities() {
        return this.userPunktService.findAllPunktCities();
    }
    findOne(cityName) {
        return this.userPunktService.findByCity(cityName);
    }
    update(id, updateUserPunktDto) {
        return this.userPunktService.update(+id, updateUserPunktDto);
    }
    remove(id) {
        return this.userPunktService.remove(+id);
    }
};
exports.UserPunktController = UserPunktController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_punkt_dto_1.CreateUserPunktDto]),
    __metadata("design:returntype", void 0)
], UserPunktController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("findAllPunktCities"),
    (0, swagger_1.ApiOperation)({ summary: "Get punkt cities" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Returns a  punkt cities" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPunktController.prototype, "findAllPunktCities", null);
__decorate([
    (0, common_1.Get)(":city"),
    __param(0, (0, common_1.Param)("city")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserPunktController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_punkt_dto_1.UpdateUserPunktDto]),
    __metadata("design:returntype", void 0)
], UserPunktController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserPunktController.prototype, "remove", null);
exports.UserPunktController = UserPunktController = __decorate([
    (0, common_1.Controller)("user-punkt"),
    __metadata("design:paramtypes", [user_punkt_service_1.UserPunktService])
], UserPunktController);
//# sourceMappingURL=user_punkt.controller.js.map