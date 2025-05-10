import {
  Controller,
  All,
  Req,
  Res,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { Request, Response } from "express";
import { firstValueFrom, lastValueFrom } from "rxjs";
import * as jwt from "jsonwebtoken";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { Roles } from "./constants/enum_roles";

@Injectable()
@Controller()
export class ApiGatewayController {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {}

  async validateToken(req: Request, role: string) {
    const token = req.cookies[`${role.toLowerCase()}_access_token`];

    if (!token) return false;
    try {
      const secret = this.configService.get<string>(
        `${role}_ACCESS_TOKEN_SECRET`
      );

      const decoded = jwt.verify(token, secret);

      return decoded?.role === role;
    } catch (err) {
      return false;
    }
  }

  @All("*")
  async proxy(@Req() req: Request, @Res() res: Response) {
    const url = req.url;
    const method = req.method;
    const data = req.body;

    let target = "";
    let isAuthorized = false;

    if (url.startsWith("/products")) {
      if (method === "GET") {
        isAuthorized = true;
      } else if (url.startsWith("/products/comment")) {
        isAuthorized =
          (await this.validateToken(req, "User")) ||
          (await this.validateToken(req, "Admin"));
      } else {
        isAuthorized = await this.validateToken(req, "Admin");
      }
      target = process.env.PRODUCTS_SERVICE_URL;
    } else if (url.startsWith("/order")) {
      isAuthorized = await this.validateToken(req, "User");
      target = process.env.ORDER_SERVICE_URL;
    } else if (url.startsWith("/auth")) {
      target = process.env.AUTH_SERVICE_URL;
      isAuthorized = true;
    } else {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "Route not found" });
    }

    if (!isAuthorized) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Unauthorized" });
    }

    const headers = { ...req.headers };

    delete headers["content-length"];
    const allRoles = Roles;
    for (const role of allRoles) {
      const token = req.cookies[`${role.toLowerCase()}_access_token`];
      if (token) {
        try {
          const secret = this.configService.get<string>(
            `${role}_ACCESS_TOKEN_SECRET`
          );
          const decoded = jwt.verify(token, secret) as any;

          if (decoded?.id) {
            headers["x_user_id"] = decoded.id;
            headers["x_user_role"] = decoded.role;
          }
        } catch (err) {}
      }
    }
    try {
      const response = await lastValueFrom(
        this.httpService.request({
          method,
          url: `${target}${url}`,
          data,
          headers: {
            ...headers,
            x_allowed_origin: process.env.API_GATEWAY_URL,
          },
        })
      );

      if (response.headers["set-cookie"]) {
        res.setHeader("Set-Cookie", response.headers["set-cookie"]);
      }
      return res.status(response.status).json(response.data);
    } catch (error) {
      const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      return res
        .status(status)
        .json(error.response?.data || { message: "Internal error" });
    }
  }
}
