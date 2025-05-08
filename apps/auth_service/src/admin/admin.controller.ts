import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import { AdminLoginDto, CreateAdminDto } from "./dto/createAdmin.dto";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.adminRegister(createAdminDto);
  }

  @Post("login")
  @HttpCode(HttpStatus.ACCEPTED)
  async loginAdmin(
    @Body() loginAdminDto: AdminLoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return this.adminService.login(loginAdminDto, response);
  }

  @Get("getAdmin/:id")
  @HttpCode(HttpStatus.OK)
  async getAdmin(@Param("id") id: string) {
    return this.adminService.getAdmin(id);
  }
  @Get("getAdmins")
  @HttpCode(HttpStatus.OK)
  async getAdmins() {
    return this.adminService.getAdmins();
  }

  @Post("refreshToken")
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.adminService.refreshToken(req as any, res);
  }

  @Post("logout")
  @HttpCode(HttpStatus.OK)
  async logoutAdmin(@Res({ passthrough: true }) res: Response) {
    return this.adminService.logoutAdmin(res);
  }
}
