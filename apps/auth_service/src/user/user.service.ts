import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from "@nestjs/common";
import { CreateUserDto, UserLoginDto } from "./dto/createUser.dto";
import {
  ReturnLoginDto,
  ReturnLogoutDto,
  ReturnMessageDto,
  ReturnUserDto,
} from "./dto/return.dto";
import { PrismaService } from "apps/auth_service/prisma/prisma.service";
import { compare, hash } from "bcryptjs";
import { Prisma } from "apps/auth_service/generated/prisma";
import { CreateToken } from "../token/createToken";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async userRegister(createUserDto: CreateUserDto): Promise<ReturnMessageDto> {
    try {
      const { password, phone_number, username } = createUserDto;

      const user = await this.prismaService.user.findUnique({
        where: { username },
      });

      if (user) {
        throw new HttpException(
          "This user already exist with this username",
          HttpStatus.BAD_REQUEST
        );
      }

      const hashedPassword = await hash(password, 10);

      const createdUser = await this.prismaService.user.create({
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
        data: createdUser,
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
    userLoginDto: UserLoginDto,
    response: Response
  ): Promise<ReturnLoginDto> {
    try {
      const { password, username } = userLoginDto;

      const existUser = await this.prismaService.user.findUnique({
        where: { username },
      });

      if (!existUser) {
        throw new HttpException(
          "This user not found with this username",
          HttpStatus.BAD_REQUEST
        );
      }

      const passwordChecker = await compare(password, existUser.password);

      if (!passwordChecker) {
        throw new HttpException(
          "You are entering invalid password",
          HttpStatus.BAD_REQUEST
        );
      }
      const payloadForTokens = { id: existUser.id, role: existUser.role };
      const tokenClass = new CreateToken(
        this.configService,
        payloadForTokens.id,
        payloadForTokens.role
      );
      const { accessToken, refreshToken } =
        await tokenClass.createTokens(response);
      return { accessToken, refreshToken, message: "Siz tizimga kirdingiz" };
    } catch (err) {
      this.logger.error(`User login failed : ${err.message} `, err.stack);

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

  async getUser(id: string): Promise<ReturnUserDto> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new HttpException(
          "This user not found with this id " + id,
          HttpStatus.NOT_FOUND
        );
      }

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUsers(): Promise<ReturnUserDto[]> {
    try {
      const user = await this.prismaService.user.findMany();

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const refreshToken = (req as any).cookies?.user_refresh_token;

      const decode = await this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>("USER_REFRESH_TOKEN_SECRET"),
      });

      const user = await this.prismaService.user.findUnique({
        where: { id: decode.id },
      });

      if (!user) {
        throw new HttpException(
          "This user not found with this id " + decode.id,
          HttpStatus.NOT_FOUND
        );
      }

      const payloadForTokens = { id: user.id, role: user.role };

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
    res.clearCookie("user_access_token");
    res.clearCookie("user_refresh_token");

    return { message: "Successfully logged out" };
  }
}
