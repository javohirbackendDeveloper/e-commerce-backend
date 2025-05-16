import {
  IsCreditCard,
  IsEnum,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from "class-validator";
import { DeliverStatus } from "../enums/deliverType.enum";
import { PaymentStatus } from "../enums/paymentStatus.enum";
import { PlasticCard } from "../enums/plastic_card.enum";
import { Type } from "class-transformer";

class PaymentDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsEnum(PlasticCard)
  @IsNotEmpty()
  payment_type: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(16)
  @MaxLength(16)
  card_number: string;
}

export class CreateOrderDto {
  @IsEnum(PaymentStatus)
  @IsNotEmpty()
  paymenttype: PaymentStatus;

  @IsEnum(DeliverStatus)
  @IsNotEmpty()
  deliveringType: DeliverStatus;

  @IsLongitude()
  @IsOptional()
  locationLongitude?: number;

  @IsLatitude()
  @IsOptional()
  locationLatitude?: number;

  @IsString()
  @IsOptional()
  punktId?: string;

  @IsString()
  @IsNotEmpty()
  recipient_firstname: string;

  @IsString()
  @IsNotEmpty()
  recipient_lastname: string;

  @IsString()
  @IsNotEmpty()
  recipient_locationText: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  recipient_phone: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PaymentDto)
  payment?: PaymentDto;
}
