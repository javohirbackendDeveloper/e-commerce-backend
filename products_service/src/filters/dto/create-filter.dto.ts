import { InputType, TypeOfFilter } from "@prisma/client";
import {
  IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGeneralFilterDto {
  @ApiProperty({ description: "Filterning nomi", example: "Rang" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ enum: InputType, description: "Kiritish turi" })
  @IsEnum(InputType)
  @IsNotEmpty()
  inputType: InputType;

  @ApiProperty({ enum: TypeOfFilter, description: "Filter turi" })
  @IsEnum(TypeOfFilter)
  @IsNotEmpty()
  type: TypeOfFilter;
}

export class CreateFilterValue {
  @ApiProperty({
    description: "Filter qiymatlari",
    type: [String],
    example: ["Qizil", "Yashil"],
  })
  @IsArray()
  @IsNotEmpty()
  value: string[];

  @ApiProperty({
    description: "Filter ID (MongoId formatida)",
    example: "60d5ec49f1d4e634b8a789cd",
  })
  @IsMongoId()
  @IsNotEmpty()
  filterId: string;
}

export class CreateSpecificFilterDto {
  @ApiProperty({ description: "Filterning nomi", example: "Hajmi" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ enum: InputType, description: "Kiritish turi" })
  @IsEnum(InputType)
  @IsNotEmpty()
  inputType: InputType;

  @ApiProperty({ enum: TypeOfFilter, description: "Filter turi" })
  @IsEnum(TypeOfFilter)
  @IsNotEmpty()
  type: TypeOfFilter;

  @ApiProperty({
    description: "Kategoriyalar ro'yxati (MongoId formatida)",
    type: [String],
    example: ["60d5ec49f1d4e634b8a789cd", "60d5ec49f1d4e634b8a789ce"],
  })
  @IsArray()
  @IsNotEmpty()
  categoryIds: string[];
}
