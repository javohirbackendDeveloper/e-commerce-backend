import { PartialType } from "@nestjs/mapped-types";
import { CreateCommentDto } from "./create-comment.dto";
import { IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @ApiPropertyOptional({
    example: "Yangilangan sarlavha",
    description: "Kommentariya sarlavhasi",
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    example: "https://example.com/new-image.png",
    description: "Yangilangan rasm manzili",
  })
  @IsString()
  @IsOptional()
  image?: string;
}
