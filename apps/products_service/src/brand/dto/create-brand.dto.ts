import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateBrandWithCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsMongoId({ each: true })
  @IsNotEmpty()
  categoryId: string[];
}
