import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ChangePassword {
  @ApiProperty({ description: "Hozirgi parol", example: "currentPass123" })
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty({ description: "Yangi parol", example: "newPass456" })
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
