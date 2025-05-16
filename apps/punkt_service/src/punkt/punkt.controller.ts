import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PunktService } from "./punkt.service";
import { CreatePunktDto } from "./dto/create-punkt.dto";
import { UpdatePunktDto } from "./dto/update-punkt.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller("punkt")
export class PunktController {
  constructor(private readonly punktService: PunktService) {}

  @Post()
  create(@Body() createPunktDto: CreatePunktDto) {
    return this.punktService.create(createPunktDto);
  }

  @Get()
  findAll() {
    return this.punktService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.punktService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePunktDto: UpdatePunktDto) {
    return this.punktService.update(id, updatePunktDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.punktService.remove(id);
  }

  // RABBITMQ APIS

  @MessagePattern("get_one_punkt")
  async getOne(@Payload() id: string) {
    console.log("Message came to get_one_punkt ", { id });

    return this.punktService.findOne(id);
  }
  @MessagePattern("get_all_punkts")
  async getAll() {
    console.log("Message came to get_all_punkts");

    return this.punktService.findAll();
  }
}
