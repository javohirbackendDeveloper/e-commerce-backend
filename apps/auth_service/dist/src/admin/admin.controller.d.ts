import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import { AdminLoginDto, CreateAdminDto } from "./dto/createAdmin.dto";
import { ReturnAdminDto, ReturnLoginDto } from "./dto/return.dto";
import { UpdateAdmin } from "./dto/update.dto";
import { AdminRequest } from "./interface";
import { ChangePassword } from "./dto/changePassword.dto";
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    createAdmin(createAdminDto: CreateAdminDto): Promise<import("./dto/return.dto").ReturnMessageDto>;
    loginAdmin(loginAdminDto: AdminLoginDto, response: Response): Promise<ReturnLoginDto>;
    getAdmin(id: string): Promise<ReturnAdminDto>;
    getAdmins(): Promise<ReturnAdminDto[]>;
    refreshToken(req: Request, res: Response): Promise<{
        accessToken: any;
        refreshToken: any;
        message: string;
    }>;
    logoutAdmin(res: Response): Promise<import("./dto/return.dto").ReturnLogoutDto>;
    getAdminByToken(req: Request): Promise<any>;
    updateAdmin(req: AdminRequest, data: UpdateAdmin): Promise<{
        username: string;
        password: string;
        phone_number: string;
        id: string;
        first_name: string | null;
        last_name: string | null;
        role: import("generated/prisma").$Enums.Roles;
        profileImg: string | null;
    }>;
    uploadProfileImage(req: AdminRequest, file: Express.Multer.File): Promise<{
        username: string;
        password: string;
        phone_number: string;
        id: string;
        first_name: string | null;
        last_name: string | null;
        role: import("generated/prisma").$Enums.Roles;
        profileImg: string | null;
    }>;
    deleteProfileImage(req: AdminRequest): Promise<{
        username: string;
        password: string;
        phone_number: string;
        id: string;
        first_name: string | null;
        last_name: string | null;
        role: import("generated/prisma").$Enums.Roles;
        profileImg: string | null;
    }>;
    changePassword(req: AdminRequest, changePAsswordDto: ChangePassword): Promise<{
        username: string;
        password: string;
        phone_number: string;
        id: string;
        first_name: string | null;
        last_name: string | null;
        role: import("generated/prisma").$Enums.Roles;
        profileImg: string | null;
    }>;
}
