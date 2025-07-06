import { PartialType } from "@nestjs/swagger";
import { CreateProvinceDto } from "./create-location.dto";

export class UpdateLocationDto extends PartialType(CreateProvinceDto) {}
