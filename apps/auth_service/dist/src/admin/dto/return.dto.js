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
exports.ReturnAdminLogoutDto = exports.ReturnAdminDto = exports.ReturnAdminLoginDto = exports.ReturnAdminMessageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReturnAdminMessageDto {
}
exports.ReturnAdminMessageDto = ReturnAdminMessageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Response message",
        example: "Operation successful",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnAdminMessageDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Indicates if operation was successful",
        example: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ReturnAdminMessageDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "HTTP status code", example: 200 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ReturnAdminMessageDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Any additional data returned" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ReturnAdminMessageDto.prototype, "data", void 0);
class ReturnAdminLoginDto {
}
exports.ReturnAdminLoginDto = ReturnAdminLoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Login success message",
        example: "Admin logged in successfully",
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnAdminLoginDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Access token for authentication",
        example: "(&D^RCYVU(Y&T*^&FTUVYBIH(*&*^FT&UYI)))",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnAdminLoginDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Refresh token for authentication",
        example: "*D^RCY&YT^&FYUYIUOO*(&*FTRYGH",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReturnAdminLoginDto.prototype, "refreshToken", void 0);
class ReturnAdminDto {
}
exports.ReturnAdminDto = ReturnAdminDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Admin id", example: "678787568797674566788" }),
    __metadata("design:type", String)
], ReturnAdminDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Admin username", example: "admin001" }),
    __metadata("design:type", String)
], ReturnAdminDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Admin password (hashed)",
        example: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36YpWqC5f08VklW5HgO3kOG",
    }),
    __metadata("design:type", String)
], ReturnAdminDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Admin first name", example: "Ronaldo" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnAdminDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Admin last name", example: "Cristiano" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReturnAdminDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Admin phone number", example: "+998787678683" }),
    __metadata("design:type", String)
], ReturnAdminDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Role of admin", example: "Admin" }),
    __metadata("design:type", String)
], ReturnAdminDto.prototype, "role", void 0);
class ReturnAdminLogoutDto {
}
exports.ReturnAdminLogoutDto = ReturnAdminLogoutDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Logout message",
        example: "Logged out successfully",
    }),
    __metadata("design:type", String)
], ReturnAdminLogoutDto.prototype, "message", void 0);
//# sourceMappingURL=return.dto.js.map