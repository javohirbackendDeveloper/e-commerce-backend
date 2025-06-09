import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NotFoundError } from "rxjs";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
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

      return decode.role === "Admin";
    } catch (error) {
      return false;
    }
  }
}
