import { PartialType } from "@nestjs/mapped-types";
import { CreateCartDto } from "./create-cart.dto";
import { IsNumber, IsOptional, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCartDto extends PartialType(CreateCartDto) {
  @ApiProperty({
    description: "New quantity for the cart item",
    minimum: 1,
    example: 3,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  quantity?: number;
}
