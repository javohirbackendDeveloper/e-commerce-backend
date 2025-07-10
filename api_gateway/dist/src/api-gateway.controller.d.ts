import { Request, Response } from "express";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
export declare class ApiGatewayController {
    private readonly configService;
    private readonly httpService;
    constructor(configService: ConfigService, httpService: HttpService);
    validateToken(req: Request, role: string): Promise<boolean>;
    proxy(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
