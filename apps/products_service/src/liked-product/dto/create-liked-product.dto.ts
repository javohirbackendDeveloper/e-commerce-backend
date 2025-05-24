import { IsMongoId } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLikedProductDto {
  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Mahsulotning MongoDB ObjectId identifikatori",
  })
  @IsMongoId()
  productId: string;
}
