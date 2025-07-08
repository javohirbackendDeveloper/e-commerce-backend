import { IsArray, IsNotEmpty, IsObject, IsString } from "class-validator";

export class DeliverLocationDto {
  @IsObject()
  coordinates: {
    type: string;
    cordinates: number[][][];
  };
}
