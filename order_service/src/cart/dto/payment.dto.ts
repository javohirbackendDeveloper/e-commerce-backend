import { IsNotEmpty, IsNumber } from "class-validator";

export class PaymentDto {
  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}
