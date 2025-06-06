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
exports.PunktAdminLoginDto = exports.CreatePunktAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePunktAdminDto {
}
exports.CreatePunktAdminDto = CreatePunktAdminDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "punkt_admin1" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePunktAdminDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "securePassword123" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePunktAdminDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "+998901234567" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePunktAdminDto.prototype, "phone_number", void 0);
class PunktAdminLoginDto {
}
exports.PunktAdminLoginDto = PunktAdminLoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "punkt_admin1" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], PunktAdminLoginDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "securePassword123" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], PunktAdminLoginDto.prototype, "password", void 0);
//# sourceMappingURL=createPunktAdmin.dto.js.map