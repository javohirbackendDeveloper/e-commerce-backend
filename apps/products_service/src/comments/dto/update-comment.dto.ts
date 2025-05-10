import { PartialType } from "@nestjs/mapped-types";
import { CreateCommentDto } from "./create-comment.dto";
import { IsOptional, IsString } from "class-validator";

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  image?: string;
}
