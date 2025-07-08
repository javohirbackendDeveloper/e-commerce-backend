import {
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
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiProperty({
    enum: PaymentStatus,
    example: PaymentStatus.Card,
    description: "To‘lov statusi",
  })
  @IsEnum(PaymentStatus)
  @IsNotEmpty()
  paymenttype: PaymentStatus;

  @ApiProperty({
    enum: DeliverStatus,
    example: DeliverStatus.Courier,
    description: "Yetkazib berish turi",
  })
  @IsEnum(DeliverStatus)
  @IsNotEmpty()
  deliveringType: DeliverStatus;

  @ApiPropertyOptional({
    example: 69.2405,
    description: "Uzunlik (long) koordinatasi",
  })
  @IsLongitude()
  @IsOptional()
  locationLongitude?: number;

  @ApiPropertyOptional({
    example: 41.3122,
    description: "Kenglik (lat) koordinatasi",
  })
  @IsLatitude()
  @IsOptional()
  locationLatitude?: number;

  @ApiPropertyOptional({
    example: "pickup123",
    description: "Pickup punkt ID'si (ixtiyoriy)",
  })
  @IsString()
  @IsOptional()
  punktId?: string;

  @ApiProperty({ example: "Ali", description: "Qabul qiluvchining ismi" })
  @IsString()
  @IsNotEmpty()
  recipient_firstname: string;

  @ApiProperty({
    example: "Valiyev",
    description: "Qabul qiluvchining familiyasi",
  })
  @IsString()
  @IsNotEmpty()
  recipient_lastname: string;

  @ApiProperty({
    example: "Toshkent shahri, Chilonzor tumani, 15-dah",
    description: "Qabul qiluvchining manzili",
  })
  @IsString()
  @IsOptional()
  recipient_locationText?: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Qabul qiluvchining telefon raqami",
  })
  @IsPhoneNumber()
  @IsNotEmpty()
  recipient_phone: string;
}
