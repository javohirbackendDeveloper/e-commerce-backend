import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BrandService } from "./brand.service";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { CreateBrandWithCategoryDto } from "./dto/create-brand.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from "@nestjs/swagger";

@ApiTags("Brand")
@Controller("brand")
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post("createBrandCategory")
  @ApiOperation({ summary: "Create brand with category" })
  @ApiBody({ type: CreateBrandWithCategoryDto })
  @ApiResponse({ status: 201, description: "Brand with category created" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  createBrandCategory(@Body() dto: CreateBrandWithCategoryDto) {
    return this.brandService.createBrandWithCategory(dto);
  }

  @Get(":id")
  @ApiOperation({ summary: "Find brands by category ID" })
  @ApiParam({ name: "id", description: "Category ID" })
  @ApiResponse({ status: 200, description: "Brands retrieved" })
  @ApiResponse({ status: 404, description: "Category not found" })
  findByCategoryId(@Param("id") id: string) {
    return this.brandService.findByCategoryId(id);
  }

  @Get()
  @ApiOperation({ summary: "Get all brands" })
  @ApiResponse({ status: 200, description: "All brands retrieved" })
  findAll() {
    return this.brandService.findAll();
  }

  @Get("findOne/:id")
  @ApiOperation({ summary: "Find one brand by ID" })
  @ApiParam({ name: "id", description: "Brand ID" })
  @ApiResponse({ status: 200, description: "Brand retrieved" })
  @ApiResponse({ status: 404, description: "Brand not found" })
  findOne(@Param("id") id: string) {
    return this.brandService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a brand" })
  @ApiParam({ name: "id", description: "Brand ID" })
  @ApiBody({ type: UpdateBrandDto })
  @ApiResponse({ status: 200, description: "Brand updated" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  @ApiResponse({ status: 404, description: "Brand not found" })
  update(@Param("id") id: string, @Body() dto: UpdateBrandDto) {
    return this.brandService.update(id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a brand" })
  @ApiParam({ name: "id", description: "Brand ID" })
  @ApiResponse({ status: 200, description: "Brand deleted" })
  @ApiResponse({ status: 404, description: "Brand not found" })
  remove(@Param("id") id: string) {
    return this.brandService.remove(id);
  }
}
