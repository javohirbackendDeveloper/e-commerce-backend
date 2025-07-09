import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UseCouponDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}
