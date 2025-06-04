import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class GetOrdersByYear {
  @ApiProperty({
    description: "This is used to get orders by year",
    example: "2025",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  year: string;
}
