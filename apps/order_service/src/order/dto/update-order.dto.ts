import { IsEnum, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { UpdateOrderStatus } from "../enums/orderStatus.enum";
import { OrderStatus } from "apps/order_service/generated/prisma";

export class UpdateOrderDto {
  @IsString()
  @IsOptional()
  recipient_firstname?: string;

  @IsString()
  @IsOptional()
  recipient_lastname?: string;

  @IsString()
  @IsOptional()
  recipient_locationText?: string;

  @IsPhoneNumber()
  @IsOptional()
  recipient_phone?: string;

  @IsEnum(UpdateOrderStatus)
  @IsOptional()
  status?: string;
}

export class UpdateOrderDtoForPunktAdmin {
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;
}
