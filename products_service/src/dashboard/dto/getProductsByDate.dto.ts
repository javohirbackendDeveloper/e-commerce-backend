import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";
import { MonthsEnum } from "../enums/month.enum";

export class GetProductsByYear {
  @ApiProperty({
    description: "This is used to get Products by year",
    example: "2025",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  year: string;
}

export class GetProductsByMonth {
  @ApiProperty({
    description: "This is used to get Products by month",
    example: "2025",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  year: string;

  @ApiProperty({
    description: "This is used to get Products by month",
    example: "fevral",
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(MonthsEnum)
  month: MonthsEnum;
}

import { IsNumber, IsOptional } from "class-validator";

export class MonthlyDataDto {
  @IsNumber()
  @IsOptional()
  yanvar?: number;

  @IsNumber()
  @IsOptional()
  fevral?: number;

  @IsNumber()
  @IsOptional()
  mart?: number;

  @IsNumber()
  @IsOptional()
  aprel?: number;

  @IsNumber()
  @IsOptional()
  may?: number;

  @IsNumber()
  @IsOptional()
  iyun?: number;

  @IsNumber()
  @IsOptional()
  iyul?: number;

  @IsNumber()
  @IsOptional()
  avgust?: number;

  @IsNumber()
  @IsOptional()
  sentabr?: number;

  @IsNumber()
  @IsOptional()
  oktabr?: number;

  @IsNumber()
  @IsOptional()
  noyabr?: number;

  @IsNumber()
  @IsOptional()
  dekabr?: number;
}
