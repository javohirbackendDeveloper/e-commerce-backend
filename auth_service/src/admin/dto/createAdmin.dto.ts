import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    description: "Registering admin",
    example: "admin001",
    minLength: 3,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @ApiProperty({
    description:
      "The password saves from accessing other people to this admin account",
    example: "*&GYHIUOG*YB76",
    minLength: 8,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: "The phone number is required to connect with admin",
    example: "+998992876727",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  phone_number: string;
}

export class AdminLoginDto {
  @ApiProperty({
    description: "Registering admin",
    example: "admin001",
    minLength: 3,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @ApiProperty({
    description:
      "The password saves from accessing other people to this admin account",
    example: "*&GYHIUOG*YB76",
    minLength: 8,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
