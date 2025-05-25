import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FiltersService } from "./filters.service";
import {
  CreateFilterValue,
  CreateGeneralFilterDto,
} from "./dto/create-filter.dto";
import { UpdateFilterDto } from "./dto/update-filter.dto";

@Controller("filters")
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  // GENERAL FILTER CREATION
  @Post("general")
  create(@Body() createGeneralFilterDto: CreateGeneralFilterDto) {
    return this.filtersService.create(createGeneralFilterDto);
  }

  @Get("general")
  findAll() {
    return this.filtersService.findAll();
  }

  @Get("general/:id")
  findOne(@Param("id") id: string) {
    return this.filtersService.findOne(id);
  }

  @Patch("general/:id")
  update(@Param("id") id: string, @Body() updateFilterDto: UpdateFilterDto) {
    return this.filtersService.update(id, updateFilterDto);
  }

  @Delete("general/:id")
  remove(@Param("id") id: string) {
    return this.filtersService.remove(id);
  }

  // SPECIFIC FILTER PART

  // CREATE VALUE FOR FILTER

  @Post("value")
  createValue(@Body() createValueDto: CreateFilterValue) {
    return this.filtersService.createValue(createValueDto);
  }
}
