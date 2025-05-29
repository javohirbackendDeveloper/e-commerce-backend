import {
  IsString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsDateString,
  Min,
  IsMongoId,
  IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";

export enum CouponStatus {
  FAOL = "FAOL",
  NOFAOL = "NOFAOL",
}

export class CreateCouponDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  discount_value: number;

  @IsNumber()
  @Type(() => Number)
  @Min(0)
  min_order_amount: number;

  @IsNumber()
  @Min(1)
  usage_limit: number;

  @IsDateString()
  end_date: string;

  @IsEnum(CouponStatus)
  @IsOptional()
  status?: CouponStatus = CouponStatus.FAOL;
}
