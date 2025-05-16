import {
  IsString,
  IsNotEmpty,
  Matches,
  IsEnum,
  MinLength,
  IsOptional,
} from "class-validator";

export class CreatePunktAdminDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;
}

export class PunktAdminLoginDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
