import { ConfigService } from "@nestjs/config";
import { Response } from "express";
export declare class CreateToken {
    private readonly configService;
    id: string;
    role: string;
    constructor(configService: ConfigService, id: string, role: string);
    createTokens(response: Response, createRefreshToken?: boolean): Promise<{
        accessToken: any;
        refreshToken: any;
    }>;
}
