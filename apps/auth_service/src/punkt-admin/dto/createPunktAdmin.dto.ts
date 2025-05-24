import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreatePunktAdminDto {
  @ApiProperty({ example: "punkt_admin1" })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: "securePassword123" })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: "+998901234567" })
  @IsString()
  @IsNotEmpty()
  phone_number: string;
}

export class PunktAdminLoginDto {
  @ApiProperty({ example: "punkt_admin1" })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @ApiProperty({ example: "securePassword123" })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
