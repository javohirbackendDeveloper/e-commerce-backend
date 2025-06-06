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
exports.CreateOrderDto = void 0;
const class_validator_1 = require("class-validator");
const deliverType_enum_1 = require("../enums/deliverType.enum");
const paymentStatus_enum_1 = require("../enums/paymentStatus.enum");
const plastic_card_enum_1 = require("../enums/plastic_card.enum");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class PaymentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50000, description: "To'lov miqdori" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PaymentDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: plastic_card_enum_1.PlasticCard,
        example: plastic_card_enum_1.PlasticCard.Click,
        description: "Plastik karta turi",
    }),
    (0, class_validator_1.IsEnum)(plastic_card_enum_1.PlasticCard),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PaymentDto.prototype, "payment_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "8600123412341234",
        description: "16 raqamli karta raqami",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(16),
    (0, class_validator_1.MaxLength)(16),
    __metadata("design:type", String)
], PaymentDto.prototype, "card_number", void 0);
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: paymentStatus_enum_1.PaymentStatus,
        example: paymentStatus_enum_1.PaymentStatus.Card,
        description: "To‘lov statusi",
    }),
    (0, class_validator_1.IsEnum)(paymentStatus_enum_1.PaymentStatus),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "paymenttype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: deliverType_enum_1.DeliverStatus,
        example: deliverType_enum_1.DeliverStatus.Courier,
        description: "Yetkazib berish turi",
    }),
    (0, class_validator_1.IsEnum)(deliverType_enum_1.DeliverStatus),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "deliveringType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 69.2405,
        description: "Uzunlik (long) koordinatasi",
    }),
    (0, class_validator_1.IsLongitude)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "locationLongitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 41.3122,
        description: "Kenglik (lat) koordinatasi",
    }),
    (0, class_validator_1.IsLatitude)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "locationLatitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: "pickup123",
        description: "Pickup punkt ID'si (ixtiyoriy)",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "punktId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Ali", description: "Qabul qiluvchining ismi" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "recipient_firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Valiyev",
        description: "Qabul qiluvchining familiyasi",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "recipient_lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Toshkent shahri, Chilonzor tumani, 15-dah",
        description: "Qabul qiluvchining manzili",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "recipient_locationText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998901234567",
        description: "Qabul qiluvchining telefon raqami",
    }),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "recipient_phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: PaymentDto, description: "To'lov ma'lumotlari" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentDto),
    __metadata("design:type", PaymentDto)
], CreateOrderDto.prototype, "payment", void 0);
//# sourceMappingURL=create-order.dto.js.map