import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: "Used to create user",
    example: "user0012",
    minLength: 3,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @ApiProperty({
    description: "Used to save your account from other people' access",
    example: "I*&YGU&T*YUTG",
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: "Used to connect with users when they created order",
    example: "+998784637723",
  })
  @IsString()
  @IsNotEmpty()
  phone_number: string;
}

export class UserLoginDto {
  @ApiProperty({
    description: "Used to find your created account",
    example: "user0012",
    minLength: 3,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @ApiProperty({
    description: "Used to save your account from other people' access",
    example: "I*&YGU&T*YUTG",
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
