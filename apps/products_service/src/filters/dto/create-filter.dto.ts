import {
  InputType,
  TypeOfFilter,
} from "apps/products_service/generated/prisma";
import {
  IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from "class-validator";

// model FilterType {
//   id String @id @default(auto()) @map("_id") @db.ObjectId
//   title String @unique
//   inputType InputType
//   filterCategory FilterCategory[]
//   values FilterValues[]
// }

export class CreateGeneralFilterDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(InputType)
  @IsNotEmpty()
  inputType: InputType;

  @IsEnum(TypeOfFilter)
  @IsNotEmpty()
  type: TypeOfFilter;
}

export class CreateFilterValue {
  @IsArray()
  @IsNotEmpty()
  value: string[];

  @IsMongoId()
  @IsNotEmpty()
  filterId: string;
}
