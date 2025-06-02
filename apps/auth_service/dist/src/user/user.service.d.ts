import { CreateUserDto, UserLoginDto } from "./dto/createUser.dto";
import { ReturnLoginDto, ReturnLogoutDto, ReturnRegisterDto, ReturnUserDto } from "./dto/return.dto";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "prisma/prisma.service";
export declare class UserService {
    private readonly configService;
    private readonly prismaService;
    private readonly jwtService;
    private readonly logger;
    constructor(configService: ConfigService, prismaService: PrismaService, jwtService: JwtService);
    userRegister(createUserDto: CreateUserDto): Promise<ReturnRegisterDto>;
    login(userLoginDto: UserLoginDto, response: Response): Promise<ReturnLoginDto>;
    getUser(id: string): Promise<ReturnUserDto>;
    getUsers(): Promise<ReturnUserDto[]>;
    refreshToken(req: Request, res: Response): Promise<{
        accessToken: any;
        refreshToken: any;
        message: string;
    }>;
    logoutAdmin(res: Response): Promise<ReturnLogoutDto>;
}
