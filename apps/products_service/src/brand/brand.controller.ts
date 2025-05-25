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

@Controller("brand")
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post("createBrandCategory")
  createBrandCategory(
    @Body() createBrandCategoryDto: CreateBrandWithCategoryDto
  ) {
    return this.brandService.createBrandWithCategory(createBrandCategoryDto);
  }

  @Get(":id")
  findByCategoryId(@Param("id") id: string) {
    return this.brandService.findByCategoryId(id);
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get("findOne/:id")
  findOne(@Param("id") id: string) {
    return this.brandService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(id, updateBrandDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.brandService.remove(id);
  }
}
