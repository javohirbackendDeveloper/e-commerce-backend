import { IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBrandWithCategoryDto {
  @ApiProperty({
    description: "Brend nomi",
    example: "Apple",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "Kategoriyalar ro‘yxati (MongoDB ID formatida)",
    example: ["60c72b2f9b1d8c001c8f9c12", "60c72b3e9b1d8c001c8f9c13"],
    type: [String],
  })
  @IsMongoId({ each: true })
  @IsNotEmpty()
  categoryId: string[];
}
