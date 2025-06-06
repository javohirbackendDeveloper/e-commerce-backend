import { IsEnum, IsOptional } from "class-validator";
import { DeliverStatus } from "../enums/deliverType.enum";
import { PaymentStatus } from "../enums/paymentStatus.enum";
import { OrderStatus } from "../enums/orderStatus.enum";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class FilterOrdersDto {
  @ApiPropertyOptional({
    enum: OrderStatus,
    description: "Buyurtma statusi (ixtiyoriy)",
    example: OrderStatus.AwaitingPayment,
  })
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;

  @ApiPropertyOptional({
    enum: DeliverStatus,
    description: "Yetkazib berish turi (ixtiyoriy)",
    example: DeliverStatus.Punkt,
  })
  @IsEnum(DeliverStatus)
  @IsOptional()
  deliveringType?: DeliverStatus;

  @ApiPropertyOptional({
    enum: PaymentStatus,
    description: "To‘lov statusi (ixtiyoriy)",
    example: PaymentStatus.Delivered,
  })
  @IsEnum(PaymentStatus)
  @IsOptional()
  paymenttype?: PaymentStatus;
}
