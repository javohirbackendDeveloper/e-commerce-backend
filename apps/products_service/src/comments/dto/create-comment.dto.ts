import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsMongoId()
  @IsNotEmpty()
  productId: string;
}
