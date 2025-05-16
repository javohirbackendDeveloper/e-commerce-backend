import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PunktAdminService } from "./punkt-admin.service";
import { CreatePunktAdminDto } from "./dto/create-punkt-admin.dto";
import { UpdatePunktAdminDto } from "./dto/update-punkt-admin.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller("punkt-admin")
export class PunktAdminController {
  constructor(private readonly punktAdminService: PunktAdminService) {}

  @Post()
  create(@Body() createPunktAdminDto: CreatePunktAdminDto) {
    return this.punktAdminService.create(createPunktAdminDto);
  }

  @Get()
  findAll() {
    return this.punktAdminService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.punktAdminService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePunktAdminDto: UpdatePunktAdminDto
  ) {
    return this.punktAdminService.update(id, updatePunktAdminDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.punktAdminService.remove(+id);
  }

  //  RABBITMQ APIS

  @MessagePattern("get_one_punktAdmin")
  async getOne(@Payload() id: string) {
    return this.punktAdminService.findOne(id);
  }

  @MessagePattern("update_one_punktAdmin")
  async updateOne(
    @Payload() payload: { id: string; data: UpdatePunktAdminDto }
  ) {
    const { id, data } = payload;

    return this.punktAdminService.update(id, data);
  }
}
