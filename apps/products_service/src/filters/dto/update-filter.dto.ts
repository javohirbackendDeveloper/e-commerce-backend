import { PartialType } from "@nestjs/mapped-types";
import { CreateGeneralFilterDto } from "./create-filter.dto";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { InputType } from "@prisma/client";

export class UpdateFilterDto extends PartialType(CreateGeneralFilterDto) {
  @IsString()
  @IsOptional()
  title?: string;

  @IsEnum(InputType)
  @IsOptional()
  inputType?: InputType;
}
