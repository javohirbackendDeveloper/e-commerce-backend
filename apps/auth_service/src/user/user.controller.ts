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
import { UserService } from "./user.service";
import { CreateUserDto, UserLoginDto } from "./dto/createUser.dto";
import { Request, Response } from "express";
import { UserGuard } from "../guards/user-auth.guard";
import { AdminGuard } from "../guards/admin-auth.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.userRegister(createUserDto);
  }

  @Post("login")
  @HttpCode(HttpStatus.ACCEPTED)
  async loginUser(
    @Body() loginUserDto: UserLoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return this.userService.login(loginUserDto, response);
  }

  @Get("getUser/:id")
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async getUser(@Param("id") id: string) {
    return this.userService.getUser(id);
  }
  @Get("getUsers")
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post("refreshToken")
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.userService.refreshToken(req as any, res);
  }

  @Post("logout")
  @HttpCode(HttpStatus.OK)
  async logoutAdmin(@Res({ passthrough: true }) res: Response) {
    return this.userService.logoutAdmin(res);
  }
}
