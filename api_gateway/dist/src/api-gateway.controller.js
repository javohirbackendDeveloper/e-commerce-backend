"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const jwt = require("jsonwebtoken");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const enum_roles_1 = require("./constants/enum_roles");
const https = require("https");
let ApiGatewayController = class ApiGatewayController {
    constructor(configService, httpService) {
        this.configService = configService;
        this.httpService = httpService;
    }
    async validateToken(req, role) {
        const token = req.cookies[`${role.toLowerCase()}_access_token`];
        if (!token)
            return false;
        try {
            const secret = this.configService.get(`${role.toUpperCase()}_ACCESS_TOKEN_SECRET`);
            const decoded = jwt.verify(token, secret);
            return (decoded === null || decoded === void 0 ? void 0 : decoded.role) === role;
        }
        catch (err) {
            console.log({ err });
            return false;
        }
    }
    async proxy(req, res) {
        var _a, _b, _c, _d, _e, _f, _g;
        const url = req.url;
        const method = req.method;
        let isAuthorized = false;
        let target = "";
        if (url.startsWith("/products")) {
            if (method === "GET") {
                isAuthorized = true;
            }
            else if (url.startsWith("/products/product/keepHealthServer")) {
                isAuthorized = true;
            }
            else if (url.startsWith("/products/comment")) {
                isAuthorized =
                    (await this.validateToken(req, "User")) ||
                        (await this.validateToken(req, "Admin"));
            }
            else if (url.startsWith("/products/category")) {
                isAuthorized = await this.validateToken(req, "Admin");
            }
            else if (url.startsWith("/products/liked-product")) {
                isAuthorized = await this.validateToken(req, "User");
            }
            else {
                isAuthorized = await this.validateToken(req, "Admin");
            }
            target = process.env.PRODUCTS_SERVICE_URL;
        }
        else if (url.startsWith("/orders")) {
            if (url.startsWith("/orders/order/user")) {
                isAuthorized = await this.validateToken(req, "User");
            }
            else if (url.startsWith("/orders/metrics")) {
                isAuthorized = true;
            }
            else if (url.startsWith("/orders/order/keepHealthServer")) {
                isAuthorized = true;
            }
            else if (url.startsWith("/orders/order/punkt")) {
                isAuthorized = await this.validateToken(req, "PunktAdmin");
            }
            else if (url.startsWith("/orders/order/admin")) {
                isAuthorized = await this.validateToken(req, "Admin");
            }
            else if (url.startsWith("/orders/cart")) {
                isAuthorized = await this.validateToken(req, "User");
            }
            target = process.env.ORDER_SERVICE_URL;
        }
        else if (url.startsWith("/auth")) {
            if (url.startsWith("/auth/punkt_admin/register")) {
                target = process.env.AUTH_SERVICE_URL;
                isAuthorized = await this.validateToken(req, "Admin");
            }
            else {
                target = process.env.AUTH_SERVICE_URL;
                isAuthorized = true;
            }
        }
        else if (url.startsWith("/punkts")) {
            if (url.startsWith("/punkts/user-punkt")) {
                target = process.env.PUNKT_SERVICE_URL;
                isAuthorized = await this.validateToken(req, "User");
            }
            else {
                target = process.env.PUNKT_SERVICE_URL;
                isAuthorized = await this.validateToken(req, "Admin");
            }
        }
        else if (url.startsWith("/staff")) {
            target = process.env.STAFF_SERVICE_URL;
            isAuthorized = await this.validateToken(req, "Admin");
        }
        else if (url.startsWith("/punktbot")) {
            target = process.env.PUNKTBOT_URL;
            isAuthorized = true;
        }
        else {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ message: "Route not found" });
        }
        if (!isAuthorized) {
            return res
                .status(common_1.HttpStatus.UNAUTHORIZED)
                .json({ message: "Unauthorized" });
        }
        const headers = Object.assign({}, req.headers);
        delete headers["content-length"];
        delete headers["host"];
        for (const role of enum_roles_1.Roles) {
            const token = req.cookies[`${role.toLowerCase()}_access_token`];
            if (token) {
                try {
                    const secret = this.configService.get(`${role.toUpperCase()}_ACCESS_TOKEN_SECRET`);
                    const decoded = jwt.verify(token, secret);
                    if (decoded === null || decoded === void 0 ? void 0 : decoded.id) {
                        headers["x_user_id"] = decoded.id;
                        headers["x_user_role"] = decoded.role;
                    }
                }
                catch (_h) { }
            }
        }
        if ((_a = req.headers["content-type"]) === null || _a === void 0 ? void 0 : _a.includes("multipart/form-data")) {
            try {
                const proxiedRequest = await this.httpService.axiosRef.request({
                    method,
                    url: `${target}${url}`,
                    headers: Object.assign(Object.assign({}, headers), { x_allowed_origin: process.env.API_GATEWAY_URL, "content-type": req.headers["content-type"] }),
                    data: req,
                    responseType: "stream",
                });
                const response = await proxiedRequest;
                res.setHeader("Content-Type", response.headers["content-type"] || "application/json");
                if (response.headers["set-cookie"]) {
                    res.setHeader("Set-Cookie", response.headers["set-cookie"]);
                }
                return response.data.pipe(res);
            }
            catch (error) {
                console.log(error);
                const status = ((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                const message = ((_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || "Internal error";
                return res.status(status).json({ message, status });
            }
        }
        const data = req.body;
        try {
            const httpsAgent = new https.Agent({
                rejectUnauthorized: false,
            });
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.request({
                method,
                url: `${target}${url}`,
                data,
                headers: Object.assign(Object.assign({}, headers), { x_allowed_origin: process.env.API_GATEWAY_URL }),
                httpsAgent,
            }));
            if (response.headers["set-cookie"]) {
                res.setHeader("Set-Cookie", response.headers["set-cookie"]);
            }
            return res.status(response.status).json(response.data);
        }
        catch (error) {
            const status = ((_e = error.response) === null || _e === void 0 ? void 0 : _e.status) || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            const message = ((_g = (_f = error.response) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.message) || "Internal error";
            return res.status(status).json({
                message,
                status,
            });
        }
    }
};
exports.ApiGatewayController = ApiGatewayController;
__decorate([
    (0, common_1.All)("*"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApiGatewayController.prototype, "proxy", null);
exports.ApiGatewayController = ApiGatewayController = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService])
], ApiGatewayController);
//# sourceMappingURL=api-gateway.controller.js.map