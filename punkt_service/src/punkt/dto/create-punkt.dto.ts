import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class WorkingHours {
  @ApiPropertyOptional()
  @IsOptional()
  day?: String;

  @ApiPropertyOptional()
  @IsOptional()
  start_time?: string;

  @ApiPropertyOptional()
  @IsOptional()
  end_time?: string;
}

export class CreatePunktDto {
  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  canTryOn?: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  punktAdminId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  repairingPunktId: string;

  @IsArray()
  workingHours: WorkingHours[];
}
