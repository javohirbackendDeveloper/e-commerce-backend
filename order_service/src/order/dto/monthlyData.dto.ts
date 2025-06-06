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
