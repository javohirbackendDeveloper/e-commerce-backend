import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateProvinceDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsMongoId()
  @IsNotEmpty()
  parenProvinceId: string;
}
