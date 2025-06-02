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
exports.ReturnRegisterDto = exports.ReturnLogoutDto = exports.ReturnUserDto = exports.ReturnLoginUserDto = exports.ReturnMessageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReturnMessageDto {
}
exports.ReturnMessageDto = ReturnMessageDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Operation successful" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnMessageDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, required: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ReturnMessageDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200, required: false }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ReturnMessageDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { key: "value" }, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ReturnMessageDto.prototype, "data", void 0);
class ReturnLoginUserDto {
}
exports.ReturnLoginUserDto = ReturnLoginUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Login successful", required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnLoginUserDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnLoginUserDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "dGhpcy1pcy1yZWZyZXNoLXRva2Vu..." }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnLoginUserDto.prototype, "refreshToken", void 0);
class ReturnUserDto {
}
exports.ReturnUserDto = ReturnUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "d290f1ee-6c54-4b01-90e6-d701748f0851" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "john_doe" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "$2b$10$secretHashedPassword123" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "John", required: false, nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnUserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Doe", required: false, nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnUserDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "+998901234567" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnUserDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "USER" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnUserDto.prototype, "role", void 0);
class ReturnLogoutDto {
}
exports.ReturnLogoutDto = ReturnLogoutDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Successfully logged out" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnLogoutDto.prototype, "message", void 0);
class ReturnRegisterDto {
}
exports.ReturnRegisterDto = ReturnRegisterDto;
//# sourceMappingURL=return.dto.js.map