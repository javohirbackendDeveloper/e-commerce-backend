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
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiResponse,
} from "@nestjs/swagger";
import { ReturnLoginUserDto, ReturnUserDto } from "./dto/return.dto";

@ApiTags("auth_service/user")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Register a new user" })
  @ApiCreatedResponse({
    description: "User registered successfully",
    type: ReturnUserDto,
  })
  @ApiBadRequestResponse({
    description: "Validation error or bad request",
  })
  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.userRegister(createUserDto);
  }

  @ApiOperation({ summary: "Login a user" })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: "User successfully logged in",
    type: ReturnLoginUserDto,
  })
  @ApiBadRequestResponse({
    description: "Invalid login credentials or bad payload",
  })
  @Post("login")
  @HttpCode(HttpStatus.ACCEPTED)
  async loginUser(
    @Body() loginUserDto: UserLoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return this.userService.login(loginUserDto, response);
  }

  @ApiOperation({ summary: "Get a user by ID (Admin only)" })
  @ApiOkResponse({
    description: "User data retrieved successfully",
    type: ReturnUserDto,
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized: Admin access only" })
  @UseGuards(AdminGuard)
  @Get("getUser/:id")
  @HttpCode(HttpStatus.OK)
  async getUser(@Param("id") id: string) {
    return this.userService.getUser(id);
  }

  @ApiOperation({ summary: "Get list of all users (Admin only)" })
  @ApiOkResponse({
    description: "All users retrieved successfully",
    type: [ReturnUserDto],
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized: Admin access only" })
  @UseGuards(AdminGuard)
  @Get("getUsers")
  @HttpCode(HttpStatus.OK)
  async getUsers() {
    return this.userService.getUsers();
  }

  @ApiOperation({
    summary: "Generate new access token from refresh token",
  })
  @ApiOkResponse({
    description: "New access token generated",
    type: ReturnLoginUserDto,
  })
  @ApiBadRequestResponse({ description: "Invalid or missing refresh token" })
  @Post("refreshToken")
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.userService.refreshToken(req as any, res);
  }

  @ApiOperation({ summary: "Logout user" })
  @ApiOkResponse({ description: "User successfully logged out" })
  @Post("logout")
  @HttpCode(HttpStatus.OK)
  async logoutAdmin(@Res({ passthrough: true }) res: Response) {
    return this.userService.logoutAdmin(res);
  }

  @ApiOperation({ summary: "Get user details by token" })
  @ApiOkResponse({
    description: "User data retrieved successfully",
    type: ReturnUserDto,
  })
  @ApiBadRequestResponse({
    description: "Invalid token or user not found",
  })
  @Get("getUserByToken")
  @UseGuards(UserGuard)
  @HttpCode(HttpStatus.OK)
  async getUserByToken(@Req() req: Request) {
    const user = (req as any).user;
    return user;
  }

  // api for auto sleep

  @Get("keepHealthServer")
  @ApiOperation({ summary: "Keep server from auto sleep" })
  async keepHealthServer(@Res() res: Response) {
    return this.userService.keepHealthServer(res);
  }
}
