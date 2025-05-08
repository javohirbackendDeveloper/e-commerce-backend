import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class ReturnMessageDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsBoolean()
  @IsOptional()
  success?: boolean;

  @IsInt()
  @IsOptional()
  statusCode?: number;

  @IsOptional()
  data?: unknown;
}

export class ReturnLoginDto {
  @IsString()
  @IsOptional()
  message?: string;

  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}

export class ReturnUserDto {
  id: string;
  username: string;
  password: string;
  @IsOptional()
  first_name?: string | null;
  @IsOptional()
  last_name?: string | null;
  phone_number: string;
  role: string;
}

export class ReturnLogoutDto {
  message: string;
}
