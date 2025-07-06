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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from "@nestjs/swagger";

@ApiTags("punkt_service/punkt")
@Controller("punkt")
export class PunktController {
  constructor(private readonly punktService: PunktService) {}

  @Post()
  @ApiOperation({ summary: "Create new punkt" })
  @ApiBody({ type: CreatePunktDto })
  @ApiResponse({ status: 201, description: "Punkt created successfully" })
  create(@Body() createPunktDto: CreatePunktDto) {
    return this.punktService.create(createPunktDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all punkts" })
  @ApiResponse({ status: 200, description: "Returns all punkts" })
  findAll() {
    return this.punktService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get punkt by ID" })
  @ApiParam({ name: "id", type: String })
  @ApiResponse({ status: 200, description: "Returns a single punkt" })
  findOne(@Param("id") id: string) {
    return this.punktService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update punkt by ID" })
  @ApiParam({ name: "id", type: String })
  @ApiBody({ type: UpdatePunktDto })
  @ApiResponse({ status: 200, description: "Punkt updated successfully" })
  update(@Param("id") id: string, @Body() updatePunktDto: UpdatePunktDto) {
    return this.punktService.update(id, updatePunktDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete punkt by ID" })
  @ApiParam({ name: "id", type: String })
  @ApiResponse({ status: 200, description: "Punkt deleted successfully" })
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

  // applied punkts

  @Get("appliedPunkts/getAll")
  @ApiOperation({ summary: "Get applied punkts" })
  @ApiResponse({ status: 200, description: "Returns a multi punkts" })
  getAppliedPunkts() {
    return this.punktService.getAppliedPunkts();
  }

  @Get("repairingPunkts/getAll")
  @ApiOperation({ summary: "Get repairing punkts" })
  @ApiResponse({ status: 200, description: "Returns a multi punkts" })
  getRepairingPunkts() {
    return this.punktService.getRepairingPunkts();
  }

  @Patch("appliedPunkts/changeToRepair/:id")
  @ApiOperation({ summary: "Change applied punkt to repairing" })
  @ApiResponse({
    status: 200,
    description: "Change applied punkt to repairing",
  })
  changeToRepair(@Param("id") punktId: string) {
    return this.punktService.changeToRepair(punktId);
  }
}
