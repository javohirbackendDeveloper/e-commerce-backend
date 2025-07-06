import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LocationService } from "./location.service";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { CreateCityDto, CreateProvinceDto } from "./dto/create-location.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller("location")
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  // province
  @Post("province")
  create(@Body() createProvinceDto: CreateProvinceDto) {
    return this.locationService.create(createProvinceDto);
  }

  @Get("province")
  findAll() {
    return this.locationService.findAll();
  }

  @Get("province/:id")
  findOne(@Param("id") id: string) {
    return this.locationService.findOne(id);
  }

  @Patch("province/:id")
  update(
    @Param("id") id: string,
    @Body() updateLocationDto: UpdateLocationDto
  ) {
    return this.locationService.update(id, updateLocationDto);
  }

  @Delete("province/:id")
  remove(@Param("id") id: string) {
    return this.locationService.remove(id);
  }

  // CITY

  @Post("city")
  createCity(@Body() createCityDto: CreateCityDto) {
    return this.locationService.createCity(createCityDto);
  }

  @Delete("city/:id")
  removeCity(@Param("id") id: string) {
    return this.locationService.removeCity(id);
  }

  // apis for other microservices

  @MessagePattern("get_provinces")
  async getAllProvinces() {
    return this.locationService.findAll();
  }
  @MessagePattern("get_cities_by_province")
  async getCitiesByProvince(@Payload() provinceId: string) {
    return this.locationService.findAllCitiesByProvince(provinceId);
  }
}
