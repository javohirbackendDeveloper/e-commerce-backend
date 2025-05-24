import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class TimeRange {
  @ApiProperty()
  @IsString()
  startTime: string;

  @ApiProperty()
  @IsString()
  endTime: string;
}

class WorkingHours {
  @ApiPropertyOptional({ type: TimeRange })
  @IsOptional()
  dushanba?: TimeRange;

  @ApiPropertyOptional({ type: TimeRange })
  @IsOptional()
  seshanba?: TimeRange;

  @ApiPropertyOptional({ type: TimeRange })
  @IsOptional()
  chorshanba?: TimeRange;

  @ApiPropertyOptional({ type: TimeRange })
  @IsOptional()
  payshanba?: TimeRange;

  @ApiPropertyOptional({ type: TimeRange })
  @IsOptional()
  juma?: TimeRange;

  @ApiPropertyOptional({ type: TimeRange })
  @IsOptional()
  shanba?: TimeRange;

  @ApiPropertyOptional({ type: TimeRange })
  @IsOptional()
  yakshanba?: TimeRange;
}

export class CreatePunktDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: WorkingHours })
  @IsNotEmpty()
  workingHours: WorkingHours;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  canTryOn?: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  locationText: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  locationLongitude: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  locationLatitude: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  region: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  punktAdminId: string;
}
