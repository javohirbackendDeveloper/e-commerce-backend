import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";
import { MonthsEnum } from "../enums/month.enum";

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

export class GetOrdersByMonth {
  @ApiProperty({
    description: "This is used to get orders by month",
    example: "2025",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  year: string;

  @ApiProperty({
    description: "This is used to get orders by month",
    example: "fevral",
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(MonthsEnum)
  month: MonthsEnum;
}
