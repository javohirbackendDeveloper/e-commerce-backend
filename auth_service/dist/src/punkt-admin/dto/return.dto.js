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
exports.ReturnLogoutDto = exports.ReturnPunktAdminDto = exports.ReturnLoginDto = exports.ReturnMessageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReturnMessageDto {
}
exports.ReturnMessageDto = ReturnMessageDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Operation completed successfully" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnMessageDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ReturnMessageDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 200 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ReturnMessageDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: { key: "value" },
        description: "Any additional data",
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ReturnMessageDto.prototype, "data", void 0);
class ReturnLoginDto {
}
exports.ReturnLoginDto = ReturnLoginDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Login successful" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnLoginDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "eyJhbGciOiJIUzI1NiIsInR5cCI6..." }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnLoginDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "dGhpcy1pcy1hLXJlZnJlc2gtdG9rZW4=" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnLoginDto.prototype, "refreshToken", void 0);
class ReturnPunktAdminDto {
}
exports.ReturnPunktAdminDto = ReturnPunktAdminDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "123e4567-e89b-12d3-a456-426614174000" }),
    __metadata("design:type", String)
], ReturnPunktAdminDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "punkt_admin1" }),
    __metadata("design:type", String)
], ReturnPunktAdminDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "$2b$10$secretHashedPassword" }),
    __metadata("design:type", String)
], ReturnPunktAdminDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Ali", nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnPunktAdminDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Valiyev", nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnPunktAdminDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "+998901234567" }),
    __metadata("design:type", String)
], ReturnPunktAdminDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PUNKT_ADMIN" }),
    __metadata("design:type", String)
], ReturnPunktAdminDto.prototype, "role", void 0);
class ReturnLogoutDto {
}
exports.ReturnLogoutDto = ReturnLogoutDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Logout successful" }),
    __metadata("design:type", String)
], ReturnLogoutDto.prototype, "message", void 0);
//# sourceMappingURL=return.dto.js.map