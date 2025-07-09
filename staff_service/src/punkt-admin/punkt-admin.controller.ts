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
import {
  CreatePunktAdminDto,
  EnterAccountDto,
} from "./dto/create-punkt-admin.dto";
import { UpdatePunktAdminDto } from "./dto/update-punkt-admin.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";

@ApiTags("staff_service/punkt-admin")
@Controller("punkt-admin")
export class PunktAdminController {
  constructor(private readonly punktAdminService: PunktAdminService) {}

  @Post()
  @ApiOperation({ summary: "Create a new punkt admin" })
  create(@Body() createPunktAdminDto: CreatePunktAdminDto) {
    return this.punktAdminService.create(createPunktAdminDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all punkt admins" })
  findAll() {
    return this.punktAdminService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get punkt admin by ID" })
  @ApiParam({ name: "id", type: String, description: "Punkt Admin ID" })
  findOne(@Param("id") id: string) {
    return this.punktAdminService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update punkt admin by ID" })
  @ApiParam({ name: "id", type: String, description: "Punkt Admin ID" })
  update(
    @Param("id") id: string,
    @Body() updatePunktAdminDto: UpdatePunktAdminDto
  ) {
    return this.punktAdminService.update(id, updatePunktAdminDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete punkt admin by ID" })
  @ApiParam({
    name: "id",
    type: Number,
    description: "Punkt Admin ID (number)",
  })
  remove(@Param("id") id: string) {
    return this.punktAdminService.remove(+id);
  }

  // RABBITMQ APIS

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
