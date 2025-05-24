import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class ReturnMessageDto {
  @ApiProperty({ example: "Operation completed successfully" })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  success?: boolean;

  @ApiPropertyOptional({ example: 200 })
  @IsInt()
  @IsOptional()
  statusCode?: number;

  @ApiPropertyOptional({
    example: { key: "value" },
    description: "Any additional data",
  })
  @IsOptional()
  data?: unknown;
}
export class ReturnLoginDto {
  @ApiPropertyOptional({ example: "Login successful" })
  @IsString()
  @IsOptional()
  message?: string;

  @ApiProperty({ example: "eyJhbGciOiJIUzI1NiIsInR5cCI6..." })
  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @ApiProperty({ example: "dGhpcy1pcy1hLXJlZnJlc2gtdG9rZW4=" })
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
export class ReturnPunktAdminDto {
  @ApiProperty({ example: "123e4567-e89b-12d3-a456-426614174000" })
  id: string;

  @ApiProperty({ example: "punkt_admin1" })
  username: string;

  @ApiProperty({ example: "$2b$10$secretHashedPassword" })
  password: string;

  @ApiPropertyOptional({ example: "Ali", nullable: true })
  @IsOptional()
  first_name?: string | null;

  @ApiPropertyOptional({ example: "Valiyev", nullable: true })
  @IsOptional()
  last_name?: string | null;

  @ApiProperty({ example: "+998901234567" })
  phone_number: string;

  @ApiProperty({ example: "PUNKT_ADMIN" })
  role: string;
}

export class ReturnLogoutDto {
  @ApiProperty({ example: "Logout successful" })
  message: string;
}
