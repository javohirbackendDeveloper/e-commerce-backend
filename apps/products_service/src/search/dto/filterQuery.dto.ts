import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class FilterQueryDto {
  @ApiPropertyOptional({
    description: "Filter by colors",
    type: [String],
    example: ["red", "blue"],
  })
  @IsArray()
  @IsOptional()
  color?: string[];

  @ApiPropertyOptional({
    description: "Minimum price filter",
    type: Number,
    example: 1000,
  })
  @IsNumber()
  @IsOptional()
  starterPrice?: number;

  @ApiPropertyOptional({
    description: "Maximum price filter",
    type: Number,
    example: 5000,
  })
  @IsNumber()
  @IsOptional()
  endOfPrice?: number;

  @ApiPropertyOptional({
    description: "Filter by brands",
    type: [String],
    example: ["Nike", "Adidas"],
  })
  @IsArray()
  @IsOptional()
  brand?: string[];

  @ApiPropertyOptional({
    description: "Category ID to filter products",
    type: String,
    example: "609e1297123abcd123456789",
  })
  @IsString()
  @IsOptional()
  categoryId?: string;
}
