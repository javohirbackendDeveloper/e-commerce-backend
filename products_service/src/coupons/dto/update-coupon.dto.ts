import { PartialType } from "@nestjs/mapped-types";
import { CreateCouponDto } from "./create-coupon.dto";
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export enum CouponStatus {
  FAOL = "FAOL",
  NOFAOL = "NOFAOL",
}

export class UpdateCouponDto extends PartialType(CreateCouponDto) {
  @ApiPropertyOptional({
    description: "Kupon kodi",
    example: "SUMMER2025",
  })
  @IsString()
  @IsOptional()
  code?: string;

  @ApiPropertyOptional({
    description: "Chegirma miqdori",
    example: 15,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  discount_value?: number;

  @ApiPropertyOptional({
    description: "Minimal buyurtma summasi uchun chegirma amal qiladi",
    example: 100,
    minimum: 0,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  min_order_amount?: number;

  @ApiPropertyOptional({
    description: "Kupondan foydalanish limitlari soni",
    example: 10,
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  @IsOptional()
  usage_limit?: number;

  @ApiPropertyOptional({
    description: "Kupon amal qilish muddati oxiri",
    example: "2025-12-31T23:59:59Z",
  })
  @IsDateString()
  @IsOptional()
  end_date?: string;

  @ApiPropertyOptional({
    description: "Kupon holati",
    enum: CouponStatus,
    default: CouponStatus.FAOL,
  })
  @IsEnum(CouponStatus)
  @IsOptional()
  status?: CouponStatus = CouponStatus.FAOL;
}
