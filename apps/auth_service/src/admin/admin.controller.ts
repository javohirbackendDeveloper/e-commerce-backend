import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import { AdminLoginDto, CreateAdminDto } from "./dto/createAdmin.dto";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { ReturnAdminDto, ReturnLoginDto } from "./dto/return.dto";
import { AdminGuard } from "../guards/admin-auth.guard";
import { UpdateAdmin } from "./dto/update.dto";
import { AdminRequest } from "./interface";
import { FileInterceptor } from "@nestjs/platform-express";
import { ChangePassword } from "./dto/changePassword.dto";

@ApiTags("auth_service/admin")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Register a new admin" })
  @ApiCreatedResponse({
    description: "Admin has been successfully registered",
    type: ReturnAdminDto,
  })
  @ApiBadRequestResponse({
    description: "Validation failed or bad request body",
  })
  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.adminRegister(createAdminDto);
  }

  @ApiOperation({ summary: "Login an existing admin" })
  @ApiOkResponse({
    description: "Admin successfully logged in. Token returned.",
    type: ReturnLoginDto,
  })
  @ApiBadRequestResponse({
    description: "Invalid login credentials or bad payload",
  })
  @Post("login")
  @HttpCode(HttpStatus.CREATED)
  async loginAdmin(
    @Body() loginAdminDto: AdminLoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return this.adminService.login(loginAdminDto, response);
  }

  @ApiOperation({ summary: "Get admin details by ID" })
  @ApiOkResponse({
    description: "Admin data retrieved successfully",
    type: ReturnAdminDto,
  })
  @ApiBadRequestResponse({
    description: "Invalid ID or admin not found",
  })
  @Get("getAdmin/:id")
  @HttpCode(HttpStatus.OK)
  async getAdmin(@Param("id") id: string) {
    return this.adminService.getAdmin(id);
  }

  @ApiOperation({ summary: "Get list of all registered admins" })
  @ApiOkResponse({
    description: "List of all admins retrieved successfully",
    type: [ReturnAdminDto],
  })
  @Get("getAdmins")
  @HttpCode(HttpStatus.OK)
  async getAdmins() {
    return this.adminService.getAdmins();
  }

  @ApiOperation({
    summary: "Generate new access token using refresh token",
  })
  @ApiOkResponse({
    description: "New access token generated",
    type: ReturnLoginDto,
  })
  @ApiBadRequestResponse({
    description: "Refresh token missing or invalid",
  })
  @Post("refreshToken")
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.adminService.refreshToken(req as any, res);
  }

  @ApiOperation({ summary: "Logout current admin" })
  @ApiOkResponse({
    description: "Admin successfully logged out",
  })
  @Post("logout")
  @HttpCode(HttpStatus.OK)
  async logoutAdmin(@Res({ passthrough: true }) res: Response) {
    return this.adminService.logoutAdmin(res);
  }

  @ApiOperation({ summary: "Get admin details by token" })
  @ApiOkResponse({
    description: "Admin data retrieved successfully",
    type: ReturnAdminDto,
  })
  @ApiBadRequestResponse({
    description: "Invalid token or admin not found",
  })
  @Get("getAdminByToken")
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async getAdminByToken(@Req() req: Request) {
    const admin = (req as any).admin;
    return admin;
  }

  @ApiOperation({ summary: "Update admin details" })
  @ApiOkResponse({
    description: "Admin data updated successfully",
    type: UpdateAdmin,
  })
  @Patch("updateAdmin")
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async updateAdmin(@Req() req: AdminRequest, @Body() data: UpdateAdmin) {
    return this.adminService.updateAccount(req, data);
  }

  @ApiOperation({ summary: "Update admin profile image" })
  @ApiOkResponse({
    description: "Admin data updated successfully",
    type: UpdateAdmin,
  })
  @Patch("updateProfileImage")
  @UseInterceptors(FileInterceptor("image"))
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async uploadProfileImage(
    @Req() req: AdminRequest,
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log("Request came to here", file);

    return this.adminService.uploadProfileImage(file, req);
  }

  @ApiOperation({ summary: "delete admin profile image" })
  @ApiOkResponse({
    description: "Admin data deleted successfully",
    type: UpdateAdmin,
  })
  @Patch("deleteProfileImage")
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async deleteProfileImage(@Req() req: AdminRequest) {
    return this.adminService.deleteProfileImage(req);
  }

  @ApiOperation({ summary: "delete admin profile image" })
  @ApiOkResponse({
    description: "Admin data deleted successfully",
    type: UpdateAdmin,
  })
  @Patch("changePassword")
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async changePassword(
    @Req() req: AdminRequest,
    @Body() changePAsswordDto: ChangePassword
  ) {
    return this.adminService.changePassword(req, changePAsswordDto);
  }
}
