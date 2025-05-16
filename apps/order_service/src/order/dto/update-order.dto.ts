import { IsEnum, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { UpdateOrderStatus } from "../enums/orderStatus.enum";

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
