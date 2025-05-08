import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";
import { NotFoundError } from "rxjs";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
    private readonly configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = request.cookies.admin_access_token;

    if (!token) {
      return false;
    }

    const decode = await this.jwtService.verifyAsync(token, {
      secret: this.configService.get<string>("ADMIN_ACCESS_TOKEN_SECRET"),
    });

    if (!decode?.id) {
      return false;
    }

    const admin = await this.adminService.getAdmin(decode.id);
    if (!admin) return false;

    return admin.role === "Admin";
  }
}
