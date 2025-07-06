"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateToken = void 0;
const enum_roles_1 = require("../../constants/enum_roles");
const jwt = require("jsonwebtoken");
class CreateToken {
    constructor(configService, id, role) {
        this.configService = configService;
        this.id = id;
        this.role = role;
    }
    async createTokens(response, createRefreshToken = true) {
        const accessToken = jwt.sign({ id: this.id, role: this.role }, this.configService.get(`${this.role.toUpperCase()}_ACCESS_TOKEN_SECRET`), {
            expiresIn: "2h",
        });
        const refreshToken = createRefreshToken &&
            jwt.sign({ id: this.id, role: this.role }, this.configService.get(`${this.role.toUpperCase()}_REFRESH_TOKEN_SECRET`), {
                expiresIn: "7d",
            });
        enum_roles_1.Roles.forEach((role) => {
            response.clearCookie(`${role.toLowerCase()}_access_token`);
            response.clearCookie(`${role.toLowerCase()}_refresh_token`);
        });
        response.cookie(`${this.role.toLowerCase()}_access_token`, accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 2 * 60 * 60 * 1000,
        });
        if (createRefreshToken) {
            response.cookie(`${this.role.toLowerCase()}_refresh_token`, refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
        }
        return {
            accessToken: accessToken,
            refreshToken: refreshToken || "",
        };
    }
}
exports.CreateToken = CreateToken;
//# sourceMappingURL=createToken.js.map