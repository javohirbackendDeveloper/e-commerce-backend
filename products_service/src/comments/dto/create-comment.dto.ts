import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty({
    example: "Yaxshi mahsulot!",
    description: "Kommentariya sarlavhasi",
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    example: "https://example.com/image.png",
    description: "Rasm manzili",
  })
  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Mahsulot IDsi (MongoDB ObjectId)",
  })
  @IsMongoId()
  @IsNotEmpty()
  productId: string;
}
