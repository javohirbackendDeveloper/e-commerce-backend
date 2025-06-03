import { PartialType } from "@nestjs/mapped-types";
import { CreateGeneralFilterDto } from "./create-filter.dto";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { InputType } from "@prisma/client";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateFilterDto extends PartialType(CreateGeneralFilterDto) {
  @ApiPropertyOptional({ description: "Filterning nomi", example: "Yangi nom" })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ enum: InputType, description: "Kiritish turi" })
  @IsEnum(InputType)
  @IsOptional()
  inputType?: InputType;
}
