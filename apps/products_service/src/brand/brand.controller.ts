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
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";

@Controller("brand")
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get(":id")
  findAfindByCategoryIdll(@Param("id") id: string) {
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
    return this.brandService.update(+id, updateBrandDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.brandService.remove(id);
  }
}
