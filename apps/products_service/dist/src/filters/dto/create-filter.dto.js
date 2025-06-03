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
exports.CreateSpecificFilterDto = exports.CreateFilterValue = exports.CreateGeneralFilterDto = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class CreateGeneralFilterDto {
}
exports.CreateGeneralFilterDto = CreateGeneralFilterDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGeneralFilterDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.InputType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGeneralFilterDto.prototype, "inputType", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.TypeOfFilter),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGeneralFilterDto.prototype, "type", void 0);
class CreateFilterValue {
}
exports.CreateFilterValue = CreateFilterValue;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateFilterValue.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFilterValue.prototype, "filterId", void 0);
class CreateSpecificFilterDto {
}
exports.CreateSpecificFilterDto = CreateSpecificFilterDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSpecificFilterDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.InputType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSpecificFilterDto.prototype, "inputType", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.TypeOfFilter),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSpecificFilterDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateSpecificFilterDto.prototype, "categoryIds", void 0);
//# sourceMappingURL=create-filter.dto.js.map