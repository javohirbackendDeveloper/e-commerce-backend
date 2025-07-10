"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const api_gateway_module_1 = require("./api-gateway.module");
const cookieParser = require("cookie-parser");
const express = require("express");
const swagger_merge_service_1 = require("./swagger/swagger-merge.service");
const swaggerUi = require("swagger-ui-express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_gateway_module_1.ApiGatewayModule);
    const PORT = process.env.PORT || 4000;
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.enableCors({
        origin: [
            "https://e-commerce-admin-panel-indol.vercel.app",
            "https://tezbuy-user-panel.vercel.app",
        ],
        credentials: true,
    });
    const mergedSwagger = await (0, swagger_merge_service_1.getMergedSwaggerApis)();
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(mergedSwagger));
    await app.listen(PORT, () => {
        console.log("api-gateway is working at " + PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map