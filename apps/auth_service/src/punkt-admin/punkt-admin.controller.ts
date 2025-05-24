import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { PunktAdminService } from "./punkt-admin.service";
import {
  CreatePunktAdminDto,
  PunktAdminLoginDto,
} from "./dto/createPunktAdmin.dto";
import { Request, Response } from "express";
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiBody,
} from "@nestjs/swagger";
import {
  ReturnLoginDto,
  ReturnLogoutDto,
  ReturnPunktAdminDto,
} from "./dto/return.dto";

@ApiTags("auth_service/punkt-admin")
@Controller("punkt_admin")
export class PunktAdminController {
  constructor(private readonly punktAdminService: PunktAdminService) {}

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Register a new punkt admin" })
  @ApiCreatedResponse({ type: ReturnPunktAdminDto })
  @ApiBody({ type: CreatePunktAdminDto })
  async createAdmin(@Body() createAdminDto: CreatePunktAdminDto) {
    return this.punktAdminService.adminRegister(createAdminDto);
  }
  @Post("login")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Login for punkt admin" })
  @ApiCreatedResponse({ type: ReturnLoginDto })
  @ApiBody({ type: PunktAdminLoginDto })
  async loginAdmin(
    @Body() loginAdminDto: PunktAdminLoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return this.punktAdminService.login(loginAdminDto, response);
  }

  @Post("refreshToken")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Refresh JWT token for punkt admin" })
  @ApiOkResponse({ type: ReturnLoginDto })
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.punktAdminService.refreshToken(req as any, res);
  }

  @Post("logout")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Logout punkt admin" })
  @ApiOkResponse({ type: ReturnLogoutDto })
  async logoutAdmin(@Res({ passthrough: true }) res: Response) {
    return this.punktAdminService.logoutAdmin(res);
  }
}
