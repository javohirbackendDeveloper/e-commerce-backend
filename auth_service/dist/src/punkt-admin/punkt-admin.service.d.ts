import { CreatePunktAdminDto, PunktAdminLoginDto } from "./dto/createPunktAdmin.dto";
import { ReturnLoginDto, ReturnLogoutDto, ReturnMessageDto } from "./dto/return.dto";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import { PrismaService } from "prisma/prisma.service";
export declare class PunktAdminService {
    private readonly configService;
    private readonly prismaService;
    private readonly jwtService;
    private readonly logger;
    constructor(configService: ConfigService, prismaService: PrismaService, jwtService: JwtService);
    adminRegister(createAdminDto: CreatePunktAdminDto): Promise<ReturnMessageDto>;
    login(adminLoginDto: PunktAdminLoginDto, response: Response): Promise<ReturnLoginDto>;
    refreshToken(req: Request, res: Response): Promise<{
        accessToken: any;
        refreshToken: any;
        message: string;
    }>;
    logoutAdmin(res: Response): Promise<ReturnLogoutDto>;
}
