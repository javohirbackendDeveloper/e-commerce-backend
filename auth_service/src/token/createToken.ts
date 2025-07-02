import { ConfigService } from "@nestjs/config";
import { Roles } from "constants/enum_roles";
import { Response } from "express";
import * as jwt from "jsonwebtoken";

export class CreateToken {
  id: string;
  role: string;

  constructor(
    private readonly configService: ConfigService,
    id: string,
    role: string
  ) {
    this.id = id;
    this.role = role;
  }

  async createTokens(response: Response, createRefreshToken: boolean = true) {
    const accessToken = jwt.sign(
      { id: this.id, role: this.role },
      this.configService.get<string>(
        `${this.role.toUpperCase()}_ACCESS_TOKEN_SECRET`
      ),
      {
        expiresIn: "2h",
      }
    );

    const refreshToken =
      createRefreshToken &&
      jwt.sign(
        { id: this.id, role: this.role },
        this.configService.get<string>(
          `${this.role.toUpperCase()}_REFRESH_TOKEN_SECRET`
        ),
        {
          expiresIn: "7d",
        }
      );

    Roles.forEach((role) => {
      response.clearCookie(`${role.toLowerCase()}_access_token`);
      response.clearCookie(`${role.toLowerCase()}_refresh_token`);
    });

    response.cookie(`${this.role.toLowerCase()}_access_token`, accessToken, {
      httpOnly: true,
      // secure: this.configService.get<string>("NODE_ENV") === "production",
      secure: false,
      sameSite: "strict",
      maxAge: 2 * 60 * 60 * 1000,

      // maxAge: 15 * 60 * 1000,
    });

    if (createRefreshToken) {
      response.cookie(
        `${this.role.toLowerCase()}_refresh_token`,
        refreshToken,
        {
          httpOnly: true,
          secure: false,
          // secure: this.configService.get<string>("NODE_ENV") === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        }
      );
    }

    return {
      accessToken: accessToken,
      refreshToken: refreshToken || "",
    };
  }
}
