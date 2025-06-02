import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class ReturnAdminMessageDto {
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

export class ReturnAdminLoginDto {
  @ApiProperty({
    description: "It comes from loggen in admin",
    example: "Admin logged in successfully",
  })
  @IsString()
  @IsOptional()
  message?: string;

  @ApiProperty({
    description: "Access token for authentication",
    example: "(&D^RCYVU(Y&T*^&FTUVYBIH(*&*^FT&UYI)))",
  })
  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @ApiProperty({
    description: "Refresh token for authentication",
    example: "*D^RCY&YT^&FYUYIUOO*(&*FTRYGH",
  })
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}

export class ReturnAdminDto {
  @ApiProperty({ description: "Admin id", example: "678787568797674566788" })
  id: string;
  @ApiProperty({ description: "Admin username", example: "admin001" })
  username: string;
  @ApiProperty({
    description: "Admin password",
    example: "678787568797674566788",
  })
  password: string;
  @ApiPropertyOptional({ description: "Admin first_name", example: " Ronaldo" })
  @IsOptional()
  first_name?: string | null;
  @ApiPropertyOptional({
    description: "Admin last_name",
    example: "Cristiano ",
  })
  @IsOptional()
  last_name?: string | null;

  @ApiProperty({ description: "Admin phone number", example: "+998787678683" })
  phone_number: string;

  @ApiProperty({ description: "Role of admin", example: "Admin" })
  role: string;
}

export class ReturnAdminLogoutDto {
  message: string;
}
