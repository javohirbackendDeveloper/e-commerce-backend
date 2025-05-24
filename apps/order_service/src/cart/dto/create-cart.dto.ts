import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
  @ApiProperty({
    description: "ID of the product to add to cart",
    example: "60d5ecb8f8b7a12f8c8f7f51",
  })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    description: "Quantity of the product",
    minimum: 1,
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  quantity: number;
}
