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
exports.FilterOrdersDto = void 0;
const class_validator_1 = require("class-validator");
const deliverType_enum_1 = require("../enums/deliverType.enum");
const paymentStatus_enum_1 = require("../enums/paymentStatus.enum");
const orderStatus_enum_1 = require("../enums/orderStatus.enum");
class FilterOrdersDto {
}
exports.FilterOrdersDto = FilterOrdersDto;
__decorate([
    (0, class_validator_1.IsEnum)(orderStatus_enum_1.OrderStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterOrdersDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(deliverType_enum_1.DeliverStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterOrdersDto.prototype, "deliveringType", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(paymentStatus_enum_1.PaymentStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterOrdersDto.prototype, "paymenttype", void 0);
//# sourceMappingURL=filterOrders.dto.js.map