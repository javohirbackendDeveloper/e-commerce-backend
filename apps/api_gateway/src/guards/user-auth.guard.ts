import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const token = req.cookies.user_access_token;
      if (token) {
        const decode = await this.jwtService.verifyAsync(token, {
          secret: this.configService.get<string>("USER_ACCESS_TOKEN_SECRET"),
        });

        return decode.role === "User";
      }

      return false;
    } catch (err) {
      return false;
    }
  }
}
