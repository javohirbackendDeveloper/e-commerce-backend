import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UserPunktService } from "./user_punkt.service";
import { CreateUserPunktDto } from "./dto/create-user_punkt.dto";
import { UpdateUserPunktDto } from "./dto/update-user_punkt.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("user-punkt")
export class UserPunktController {
  constructor(private readonly userPunktService: UserPunktService) {}

  @Post()
  create(@Body() createUserPunktDto: CreateUserPunktDto) {
    return this.userPunktService.create(createUserPunktDto);
  }

  @Get("findAllPunktCities")
  @ApiOperation({ summary: "Get punkt cities" })
  @ApiResponse({ status: 200, description: "Returns a  punkt cities" })
  findAllPunktCities() {
    return this.userPunktService.findAllPunktCities();
  }

  @Get(":city")
  findOne(@Param("city") cityName: string) {
    return this.userPunktService.findByCity(cityName);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateUserPunktDto: UpdateUserPunktDto
  ) {
    return this.userPunktService.update(+id, updateUserPunktDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userPunktService.remove(+id);
  }
}
