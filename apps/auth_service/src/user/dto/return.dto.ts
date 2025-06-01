import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class ReturnMessageDto {
  @ApiProperty({ example: "Operation successful" })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  success?: boolean;

  @ApiProperty({ example: 200, required: false })
  @IsInt()
  @IsOptional()
  statusCode?: number;

  @ApiProperty({ example: { key: "value" }, required: false })
  @IsOptional()
  data?: unknown;
}
export class ReturnLoginDto {
  @ApiProperty({ example: "Login successful", required: false })
  @IsString()
  @IsOptional()
  message?: string;

  @ApiProperty({ example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." })
  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @ApiProperty({ example: "dGhpcy1pcy1yZWZyZXNoLXRva2Vu..." })
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}

export class ReturnUserDto {
  @ApiProperty({ example: "d290f1ee-6c54-4b01-90e6-d701748f0851" })
  @IsString()
  id: string;

  @ApiProperty({ example: "john_doe" })
  @IsString()
  username: string;

  @ApiProperty({ example: "$2b$10$secretHashedPassword123" })
  @IsString()
  password: string;

  @ApiProperty({ example: "John", required: false, nullable: true })
  @IsOptional()
  first_name?: string | null;

  @ApiProperty({ example: "Doe", required: false, nullable: true })
  @IsOptional()
  last_name?: string | null;

  @ApiProperty({ example: "+998901234567" })
  @IsString()
  phone_number: string;

  @ApiProperty({ example: "USER" })
  @IsString()
  role: string;
}

export class ReturnLogoutDto {
  @ApiProperty({ example: "Successfully logged out" })
  @IsString()
  message: string;
}

export class ReturnRegisterDto {
  username: string;
  phone_number: string;
  id: string;
}
