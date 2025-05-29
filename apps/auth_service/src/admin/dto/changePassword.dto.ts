import { IsNotEmpty, IsString } from "class-validator";

export class ChangePassword {
  @IsString()
  @IsNotEmpty()
  currentPassword: string;
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
