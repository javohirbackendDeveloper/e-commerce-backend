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

export enum CouponStatus {
  FAOL = "FAOL",
  NOFAOL = "NOFAOL",
}

export class UpdateCouponDto extends PartialType(CreateCouponDto) {
  @IsString()
  @IsOptional()
  code?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  discount_value?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  min_order_amount?: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  usage_limit: number;

  @IsDateString()
  @IsOptional()
  end_date: string;

  @IsEnum(CouponStatus)
  @IsOptional()
  status?: CouponStatus = CouponStatus.FAOL;
}
