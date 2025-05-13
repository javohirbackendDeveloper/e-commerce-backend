import { PartialType } from "@nestjs/mapped-types";
import { CreateCartDto } from "./create-cart.dto";
import { IsNumber, IsOptional, Min } from "class-validator";

export class UpdateCartDto extends PartialType(CreateCartDto) {
  @IsNumber()
  @IsOptional()
  @Min(1)
  quantity?: number;
}
