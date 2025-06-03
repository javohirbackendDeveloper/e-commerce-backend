import { IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateAdmin {
  @ApiPropertyOptional({ description: "Adminning ismi", example: "Ronaldo" })
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiPropertyOptional({
    description: "Adminning familiyasi",
    example: "Cristiano",
  })
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiPropertyOptional({
    description: "Adminning telefon raqami",
    example: "+998901234567",
  })
  @IsString()
  @IsOptional()
  phone_number?: string;
}
