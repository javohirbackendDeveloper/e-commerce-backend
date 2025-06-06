import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";
import { ConfigService } from "@nestjs/config";
export declare class AdminGuard implements CanActivate {
    private readonly jwtService;
    private readonly adminService;
    private readonly configService;
    constructor(jwtService: JwtService, adminService: AdminService, configService: ConfigService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
