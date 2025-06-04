"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const api_gateway_module_1 = require("./api-gateway.module");
const cookieParser = require("cookie-parser");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_gateway_module_1.ApiGatewayModule);
    const PORT = process.env.PORT || 4000;
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.enableCors({
        origin: ["http://localhost:5173", "http://localhost:5174"],
        credentials: true,
    });
    await app.listen(PORT, () => {
        console.log("api-gateway is running at " + PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map