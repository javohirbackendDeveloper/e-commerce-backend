import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from "@nestjs/common";

import { PrismaService } from "apps/auth_service/prisma/prisma.service";
import { compare, hash } from "bcryptjs";
import { Prisma } from "apps/auth_service/generated/prisma";
import { CreateToken } from "../token/createToken";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";
import { JwtService } from "@nestjs/jwt";
import { AdminLoginDto, CreateAdminDto } from "./dto/createAdmin.dto";
import {
  ReturnAdminDto,
  ReturnLoginDto,
  ReturnLogoutDto,
  ReturnMessageDto,
} from "./dto/return.dto";

@Injectable()
export class AdminService {
  private readonly logger = new Logger(AdminService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async adminRegister(
    createAdminDto: CreateAdminDto
  ): Promise<ReturnMessageDto> {
    try {
      const { password, phone_number, username } = createAdminDto;

      const admin = await this.prismaService.admin.findUnique({
        where: { username },
      });

      if (admin) {
        throw new HttpException(
          "This admin already exist with this username",
          HttpStatus.BAD_REQUEST
        );
      }

      const hashedPassword = await hash(password, 10);

      const createdAdmin = await this.prismaService.admin.create({
        data: { password: hashedPassword, username, phone_number },
        select: {
          id: true,
          password: false,
          phone_number: true,
          username: true,
        },
      });
      return {
        message: "Siz muvaffaqiyatli ro'yxatdan o'tdingiz",
        success: true,
        statusCode: 201,
        data: createdAdmin,
      };
    } catch (error) {
      this.logger.error(`Registration failed : ${error.message}`, error.stack);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        this.logger.error(`Prisma Error code :  ${error.code}`);

        throw new ConflictException("Prisma Error");
      }

      throw new HttpException(
        {
          message: "Something went wrong please try again later",
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async login(
    adminLoginDto: AdminLoginDto,
    response: Response
  ): Promise<ReturnLoginDto> {
    try {
      const { password, username } = adminLoginDto;

      const existAdmin = await this.prismaService.admin.findUnique({
        where: { username },
      });

      if (!existAdmin) {
        throw new HttpException(
          "This admin not found with this username",
          HttpStatus.BAD_REQUEST
        );
      }

      const passwordChecker = await compare(password, existAdmin.password);

      if (!passwordChecker) {
        throw new HttpException(
          "You are entering invalid password",
          HttpStatus.BAD_REQUEST
        );
      }

      const payloadForTokens = { id: existAdmin.id, role: existAdmin.role };
      const tokenClass = new CreateToken(
        this.configService,
        payloadForTokens.id,
        payloadForTokens.role
      );
      const { accessToken, refreshToken } =
        await tokenClass.createTokens(response);
      return { accessToken, refreshToken, message: "Siz tizimga kirdingiz" };
    } catch (err) {
      this.logger.error(`Admin login failed : ${err.message} `, err.stack);

      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        this.logger.error("Prisma error code " + err.code);

        throw new ConflictException("Prisma error ");
      }

      throw new HttpException(
        {
          message: "Something went wrong please try again",
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAdmin(id: string): Promise<ReturnAdminDto> {
    try {
      const admin = await this.prismaService.admin.findUnique({
        where: { id },
      });

      if (!admin) {
        throw new HttpException(
          "This admin not found with this id " + id,
          HttpStatus.NOT_FOUND
        );
      }

      return admin;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAdmins(): Promise<ReturnAdminDto[]> {
    try {
      const admin = await this.prismaService.admin.findMany();

      return admin;
    } catch (error) {
      throw new Error(error);
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const refreshToken = (req as any).cookies?.admin_refresh_token;

      const decode = await this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>("ADMIN_REFRESH_TOKEN_SECRET"),
      });

      const admin = await this.prismaService.admin.findUnique({
        where: { id: decode.id },
      });

      if (!admin) {
        throw new HttpException(
          "This admin not found with this id " + decode.id,
          HttpStatus.NOT_FOUND
        );
      }

      const payloadForTokens = { id: admin.id, role: admin.role };

      const tokenCreater = new CreateToken(
        this.configService,
        payloadForTokens.id,
        payloadForTokens.role
      );

      const { accessToken } = await tokenCreater.createTokens(res, false);

      return {
        accessToken,
        refreshToken,
        message: "Access token successfully refreshed",
      };
    } catch (error) {
      this.logger.error("Error on refresh token " + error.message, error.stack);
      throw new Error(error);
    }
  }

  async logoutAdmin(res: Response): Promise<ReturnLogoutDto> {
    res.clearCookie("admin_access_token");
    res.clearCookie("admin_refresh_token");

    return { message: "Successfully logged out" };
  }
}
