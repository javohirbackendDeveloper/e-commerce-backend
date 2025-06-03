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
  CreateSpecificFilterDto,
} from "./dto/create-filter.dto";
import { UpdateFilterDto } from "./dto/update-filter.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from "@nestjs/swagger";

@ApiTags("products_service/filters")
@Controller("filters")
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  // GENERAL FILTER CREATION
  @Post("general")
  @ApiOperation({ summary: "Create a general filter" })
  @ApiBody({ type: CreateGeneralFilterDto })
  @ApiResponse({
    status: 201,
    description: "General filter created successfully",
  })
  create(@Body() createGeneralFilterDto: CreateGeneralFilterDto) {
    return this.filtersService.create(createGeneralFilterDto);
  }

  @Get("general")
  @ApiOperation({ summary: "Get all general filters" })
  @ApiResponse({ status: 200, description: "List of general filters" })
  findAll() {
    return this.filtersService.findAll();
  }

  @Get("general/:id")
  @ApiOperation({ summary: "Get general filter by ID" })
  @ApiParam({ name: "id", description: "General filter ID" })
  @ApiResponse({ status: 200, description: "General filter data" })
  findOne(@Param("id") id: string) {
    return this.filtersService.findOne(id);
  }

  @Patch("general/:id")
  @ApiOperation({ summary: "Update a general filter" })
  @ApiParam({ name: "id", description: "General filter ID" })
  @ApiBody({ type: UpdateFilterDto })
  @ApiResponse({
    status: 200,
    description: "General filter updated successfully",
  })
  update(@Param("id") id: string, @Body() updateFilterDto: UpdateFilterDto) {
    return this.filtersService.update(id, updateFilterDto);
  }

  @Delete("general/:id")
  @ApiOperation({ summary: "Delete a general filter" })
  @ApiParam({ name: "id", description: "General filter ID" })
  @ApiResponse({
    status: 200,
    description: "General filter deleted successfully",
  })
  remove(@Param("id") id: string) {
    return this.filtersService.remove(id);
  }

  // SPECIFIC FILTER PART

  @Get("specific/:id")
  @ApiOperation({ summary: "Get specific filters by category ID" })
  @ApiParam({ name: "id", description: "Category ID" })
  @ApiResponse({ status: 200, description: "List of specific filters" })
  getFiltersByCategoryId(@Param("id") categoryId: string) {
    return this.filtersService.getFiltersByCategoryId(categoryId);
  }

  @Post("specific")
  @ApiOperation({ summary: "Create a specific filter" })
  @ApiBody({ type: CreateSpecificFilterDto })
  @ApiResponse({
    status: 201,
    description: "Specific filter created successfully",
  })
  createSpecificFilter(@Body() createSpecificDto: CreateSpecificFilterDto) {
    return this.filtersService.createSpecificFilter(createSpecificDto);
  }

  @Get("specific")
  @ApiOperation({ summary: "Get all specific filters" })
  @ApiResponse({ status: 200, description: "List of specific filters" })
  findAllSpecificFilters() {
    return this.filtersService.findAllSpecific();
  }

  @Delete("specific/:id")
  @ApiOperation({ summary: "Delete a specific filter" })
  @ApiParam({ name: "id", description: "Specific filter ID" })
  @ApiResponse({
    status: 200,
    description: "Specific filter deleted successfully",
  })
  removeSpecific(@Param("id") id: string) {
    return this.filtersService.removeSpecificFilter(id);
  }

  // CREATE VALUE FOR FILTER

  @Post("value")
  @ApiOperation({ summary: "Create a value for a filter" })
  @ApiBody({ type: CreateFilterValue })
  @ApiResponse({
    status: 201,
    description: "Filter value created successfully",
  })
  createValue(@Body() createValueDto: CreateFilterValue) {
    return this.filtersService.createValue(createValueDto);
  }

  @Delete("value/:id")
  @ApiOperation({ summary: "Delete a filter value" })
  @ApiParam({ name: "id", description: "Filter value ID" })
  @ApiResponse({
    status: 200,
    description: "Filter value deleted successfully",
  })
  removeValue(@Param("id") id: string) {
    return this.filtersService.deleteValue(id);
  }
}
