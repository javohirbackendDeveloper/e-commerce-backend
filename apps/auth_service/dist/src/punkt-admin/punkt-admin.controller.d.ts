import { PunktAdminService } from "./punkt-admin.service";
import { CreatePunktAdminDto, PunktAdminLoginDto } from "./dto/createPunktAdmin.dto";
import { Request, Response } from "express";
import { ReturnLoginDto, ReturnLogoutDto } from "./dto/return.dto";
export declare class PunktAdminController {
    private readonly punktAdminService;
    constructor(punktAdminService: PunktAdminService);
    createAdmin(createAdminDto: CreatePunktAdminDto): Promise<import("./dto/return.dto").ReturnMessageDto>;
    loginAdmin(loginAdminDto: PunktAdminLoginDto, response: Response): Promise<ReturnLoginDto>;
    refreshToken(req: Request, res: Response): Promise<{
        accessToken: any;
        refreshToken: any;
        message: string;
    }>;
    logoutAdmin(res: Response): Promise<ReturnLogoutDto>;
}
