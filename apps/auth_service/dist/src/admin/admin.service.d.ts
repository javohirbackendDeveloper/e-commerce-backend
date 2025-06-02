import { ConfigService } from "@nestjs/config";
import { Request, Response } from "express";
import { JwtService } from "@nestjs/jwt";
import { AdminLoginDto, CreateAdminDto } from "./dto/createAdmin.dto";
import { ReturnAdminDto, ReturnLoginDto, ReturnLogoutDto, ReturnMessageDto } from "./dto/return.dto";
import { UpdateAdmin } from "./dto/update.dto";
import { AdminRequest } from "./interface";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { ChangePassword } from "./dto/changePassword.dto";
import { PrismaService } from "prisma/prisma.service";
import { Admin } from "generated/prisma";
export declare class AdminService {
    private readonly configService;
    private readonly prismaService;
    private readonly jwtService;
    private readonly cloudinaryService;
    private readonly logger;
    constructor(configService: ConfigService, prismaService: PrismaService, jwtService: JwtService, cloudinaryService: CloudinaryService);
    adminRegister(createAdminDto: CreateAdminDto): Promise<ReturnMessageDto>;
    login(adminLoginDto: AdminLoginDto, response: Response): Promise<ReturnLoginDto>;
    getAdmin(id: string): Promise<ReturnAdminDto>;
    getAdmins(): Promise<ReturnAdminDto[]>;
    refreshToken(req: Request, res: Response): Promise<{
        accessToken: any;
        refreshToken: any;
        message: string;
    }>;
    logoutAdmin(res: Response): Promise<ReturnLogoutDto>;
    updateAccount(req: AdminRequest, data: UpdateAdmin): Promise<Admin>;
    uploadProfileImage(file: Express.Multer.File, req: AdminRequest): Promise<Admin>;
    deleteProfileImage(req: AdminRequest): Promise<Admin>;
    changePassword(req: AdminRequest, changePassword: ChangePassword): Promise<Admin>;
}
