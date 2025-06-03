import {
  IsString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsDateString,
  Min,
  IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export enum CouponStatus {
  FAOL = "FAOL",
  NOFAOL = "NOFAOL",
}

export class CreateCouponDto {
  @ApiProperty({
    description: "Kupon kodi",
    example: "SUMMER2025",
  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    description: "Chegirma miqdori",
    example: 15,
    minimum: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  discount_value: number;

  @ApiProperty({
    description: "Minimal buyurtma summasi uchun chegirma amal qiladi",
    example: 100,
    minimum: 0,
  })
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  min_order_amount: number;

  @ApiProperty({
    description: "Kupondan foydalanish limitlari soni",
    example: 10,
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  usage_limit: number;

  @ApiProperty({
    description: "Kupon amal qilish muddati oxiri",
    example: "2025-12-31T23:59:59Z",
  })
  @IsDateString()
  end_date: string;

  @ApiPropertyOptional({
    description: "Kupon holati",
    enum: CouponStatus,
    default: CouponStatus.FAOL,
  })
  @IsEnum(CouponStatus)
  @IsOptional()
  status?: CouponStatus = CouponStatus.FAOL;
}
