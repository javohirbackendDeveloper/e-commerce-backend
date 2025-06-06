import { CanActivate, ExecutionContext } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class UserGuard implements CanActivate {
    private readonly jwtService;
    private readonly userService;
    private readonly configService;
    constructor(jwtService: JwtService, userService: UserService, configService: ConfigService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
