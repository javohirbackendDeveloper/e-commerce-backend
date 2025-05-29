import { IsOptional, IsString } from "class-validator";

export class UpdateAdmin {
  @IsString()
  @IsOptional()
  first_name?: string;

  @IsString()
  @IsOptional()
  last_name?: string;

  @IsString()
  @IsOptional()
  phone_number?: string;
}
