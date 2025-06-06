import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class ReturnAdminMessageDto {
  @ApiProperty({
    description: "Response message",
    example: "Operation successful",
  })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiPropertyOptional({
    description: "Indicates if operation was successful",
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  success?: boolean;

  @ApiPropertyOptional({ description: "HTTP status code", example: 200 })
  @IsInt()
  @IsOptional()
  statusCode?: number;

  @ApiPropertyOptional({ description: "Any additional data returned" })
  @IsOptional()
  data?: unknown;
}

export class ReturnAdminLoginDto {
  @ApiProperty({
    description: "Login success message",
    example: "Admin logged in successfully",
    required: false,
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
    description: "Admin password (hashed)",
    example: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36YpWqC5f08VklW5HgO3kOG",
  })
  password: string;

  @ApiPropertyOptional({ description: "Admin first name", example: "Ronaldo" })
  @IsOptional()
  first_name?: string | null;

  @ApiPropertyOptional({ description: "Admin last name", example: "Cristiano" })
  @IsOptional()
  last_name?: string | null;

  @ApiProperty({ description: "Admin phone number", example: "+998787678683" })
  phone_number: string;

  @ApiProperty({ description: "Role of admin", example: "Admin" })
  role: string;
}

export class ReturnAdminLogoutDto {
  @ApiProperty({
    description: "Logout message",
    example: "Logged out successfully",
  })
  message: string;
}
