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

@Controller("punkt_admin")
export class PunktAdminController {
  constructor(private readonly punktAdminService: PunktAdminService) {}

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async createAdmin(@Body() createAdminDto: CreatePunktAdminDto) {
    return this.punktAdminService.adminRegister(createAdminDto);
  }

  @Post("login")
  @HttpCode(HttpStatus.CREATED)
  async loginAdmin(
    @Body() loginAdminDto: PunktAdminLoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return this.punktAdminService.login(loginAdminDto, response);
  }

  @Post("refreshToken")
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.punktAdminService.refreshToken(req as any, res);
  }

  @Post("logout")
  @HttpCode(HttpStatus.OK)
  async logoutAdmin(@Res({ passthrough: true }) res: Response) {
    return this.punktAdminService.logoutAdmin(res);
  }
}
