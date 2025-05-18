import { OrderStatus } from "apps/order_service/generated/prisma";
import { IsEnum, IsOptional } from "class-validator";
import { DeliverStatus } from "../enums/deliverType.enum";
import { PaymentStatus } from "../enums/paymentStatus.enum";

export class FilterOrdersDto {
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: string;

  @IsEnum(DeliverStatus)
  @IsOptional()
  deliveringType?: string;

  @IsEnum(PaymentStatus)
  @IsOptional()
  paymenttype?: string;
}
