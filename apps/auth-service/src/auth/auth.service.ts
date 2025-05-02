import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { compare } from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async verifyUser(username: string, password: string) {
    try {
      const user = await this.userService.getUser({ username });
      const passwordChecker = await compare(password, user.password);

      if (!passwordChecker) {
        throw new UnauthorizedException("Invalid password");
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
