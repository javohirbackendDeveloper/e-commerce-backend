import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class WorkingHours {
  @IsString()
  @IsOptional()
  dushanba?: {
    startTime: string;
    endTime: string;
  };
  @IsString()
  @IsOptional()
  seshanba?: {
    startTime: string;
    endTime: string;
  };
  @IsString()
  @IsOptional()
  chorshanba?: {
    startTime: string;
    endTime: string;
  };
  @IsString()
  @IsOptional()
  payshanba?: {
    startTime: string;
    endTime: string;
  };
  @IsString()
  @IsOptional()
  juma?: {
    startTime: string;
    endTime: string;
  };
  @IsString()
  @IsOptional()
  shanba?: {
    startTime: string;
    endTime: string;
  };
  @IsString()
  @IsOptional()
  yakshanba?: {
    startTime: string;
    endTime: string;
  };
}

export class CreatePunktDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  workingHours: WorkingHours;

  @IsBoolean()
  @IsOptional()
  canTryOn: boolean;

  @IsString()
  @IsNotEmpty()
  locationText: string;

  @IsNumber()
  @IsNotEmpty()
  locationLongitude: number;

  @IsNumber()
  @IsNotEmpty()
  locationLatitude: number;

  @IsString()
  @IsNotEmpty()
  region: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  punktAdminId: string;
}
