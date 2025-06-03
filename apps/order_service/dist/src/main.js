"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const order_service_module_1 = require("./order-service.module");
const swagger_1 = require("@nestjs/swagger");
const tezbuy_packages_1 = require("tezbuy_packages");
async function bootstrap() {
    const app = await core_1.NestFactory.create(order_service_module_1.OrderServiceModule);
    app.use(tezbuy_packages_1.allowUrls);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("order_service")
        .setVersion("1.0.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use("/swagger-json", (_, res) => res.json(document));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix("orders");
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get("PORT") || 3002;
    await app.listen(PORT, () => {
        console.log("Order service is running at " + PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map