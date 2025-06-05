import { ApiProperty } from "@nestjs/swagger";

export class ReturnMinMaxDto {
  @ApiProperty({ example: 100, description: "Minimal narx" })
  minPrice: number;

  @ApiProperty({ example: 1000, description: "Maksimal narx" })
  maxPrice: number;
}
