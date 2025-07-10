import {
  Controller,
  All,
  Req,
  Res,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { Request, Response } from "express";
import { lastValueFrom } from "rxjs";
import * as jwt from "jsonwebtoken";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { Roles } from "./constants/enum_roles";
import * as https from "https";
import * as http from "http";

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
        `${role.toUpperCase()}_ACCESS_TOKEN_SECRET`
      );

      const decoded = jwt.verify(token, secret);

      return decoded?.role === role;
    } catch (err) {
      console.log({ err });

      return false;
    }
  }

  @All("*")
  async proxy(@Req() req: Request, @Res() res: Response) {
    const url = req.url;

    const method = req.method;
    let isAuthorized = false;
    let target = "";

    // ROUTING
    if (url.startsWith("/products")) {
      if (method === "GET") {
        isAuthorized = true;
      } else if (url.startsWith("/products/product/keepHealthServer")) {
        isAuthorized = true;
      } else if (url.startsWith("/products/comment")) {
        isAuthorized =
          (await this.validateToken(req, "User")) ||
          (await this.validateToken(req, "Admin"));
      } else if (url.startsWith("/products/category")) {
        isAuthorized = await this.validateToken(req, "Admin");
      } else if (url.startsWith("/products/product/filter")) {
        isAuthorized = await this.validateToken(req, "User");
      } else if (url.startsWith("/products/liked-product")) {
        isAuthorized = await this.validateToken(req, "User");
      } else if (url.startsWith("/products/coupon/findByCode")) {
        isAuthorized = await this.validateToken(req, "User");
      } else {
        isAuthorized = await this.validateToken(req, "Admin");
      }
      target = process.env.PRODUCTS_SERVICE_URL;
    } else if (url.startsWith("/orders")) {
      if (url.startsWith("/orders/order/user")) {
        isAuthorized = await this.validateToken(req, "User");
      } else if (url.startsWith("/orders/metrics")) {
        isAuthorized = true;
      } else if (url.startsWith("/orders/order/keepHealthServer")) {
        isAuthorized = true;
      } else if (url.startsWith("/orders/order/punkt")) {
        isAuthorized = await this.validateToken(req, "PunktAdmin");
      } else if (url.startsWith("/orders/order/admin")) {
        isAuthorized = await this.validateToken(req, "Admin");
      } else if (url.startsWith("/orders/cart")) {
        isAuthorized = await this.validateToken(req, "User");
      }

      target = process.env.ORDER_SERVICE_URL;
    } else if (url.startsWith("/auth")) {
      if (url.startsWith("/auth/punkt_admin/register")) {
        target = process.env.AUTH_SERVICE_URL;
        isAuthorized = await this.validateToken(req, "Admin");
      } else {
        target = process.env.AUTH_SERVICE_URL;
        isAuthorized = true;
      }
    } else if (url.startsWith("/punkts")) {
      if (url.startsWith("/punkts/user-punkt")) {
        target = process.env.PUNKT_SERVICE_URL;
        isAuthorized = await this.validateToken(req, "User");
      } else {
        target = process.env.PUNKT_SERVICE_URL;
        isAuthorized = await this.validateToken(req, "Admin");
      }
    } else if (url.startsWith("/staff")) {
      target = process.env.STAFF_SERVICE_URL;
      if (url.startsWith("/staff/punkt-admin/enterToAccount")) {
        isAuthorized = true;
      } else {
        isAuthorized = await this.validateToken(req, "Admin");
      }
    } else if (url.startsWith("/punktbot")) {
      target = process.env.PUNKTBOT_URL;
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

    // HEADERS tayyorlash
    const headers = { ...req.headers };
    delete headers["content-length"];
    delete headers["host"];

    // USER INFO qo‘shish
    for (const role of Roles) {
      const token = req.cookies[`${role.toLowerCase()}_access_token`];
      if (token) {
        try {
          const secret = this.configService.get<string>(
            `${role.toUpperCase()}_ACCESS_TOKEN_SECRET`
          );
          const decoded = jwt.verify(token, secret) as any;

          if (decoded?.id) {
            headers["x_user_id"] = decoded.id;
            headers["x_user_role"] = decoded.role;
          }
        } catch {}
      }
    }

    // MULTIPART request uchun to‘g‘ridan-to‘g‘ri stream bilan ishlash
    if (req.headers["content-type"]?.includes("multipart/form-data")) {
      const proxyReq = http.request(
        `${target}${url}`,
        {
          method,
          headers: {
            ...headers,
            x_allowed_origin: process.env.API_GATEWAY_URL,
          },
        },
        (proxyRes) => {
          res.writeHead(proxyRes.statusCode || 200, proxyRes.headers);
          proxyRes.pipe(res);
        }
      );

      req.pipe(proxyReq);
      proxyReq.on("error", (err) => {
        console.error("Proxy error:", err);
        res.status(500).json({ message: "Internal Proxy Error" });
      });
      return;
    }

    const data = req.body;

    try {
      const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });

      const response = await lastValueFrom(
        this.httpService.request({
          method,
          url: `${target}${url}`,
          data,
          headers: {
            ...headers,
            x_allowed_origin: process.env.API_GATEWAY_URL,
          },
          httpsAgent,
        })
      );

      if (response.headers["set-cookie"]) {
        res.setHeader("Set-Cookie", response.headers["set-cookie"]);
      }
      return res.status(response.status).json(response.data);
    } catch (error) {
      const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      const message = error.response?.data?.message || "Internal error";
      return res.status(status).json({
        message,
        status,
      });
    }
  }
}
