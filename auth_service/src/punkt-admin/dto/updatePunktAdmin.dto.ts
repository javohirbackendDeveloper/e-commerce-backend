import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNotEmpty } from "class-validator";

export class UpdatePunktAdminDto {
  @ApiProperty({ example: "punkt_admin2", required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  username?: string;

  @ApiProperty({ example: "newSecurePassword", required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password?: string;

  @ApiProperty({ example: "+998911112233", required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phone_number?: string;

  @ApiProperty({ example: "Ali", required: false })
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiProperty({ example: "Valiyev", required: false })
  @IsOptional()
  @IsString()
  last_name?: string;

  @ApiProperty({ example: "punkt_123", required: false })
  @IsOptional()
  @IsString()
  punktId?: string;
}
