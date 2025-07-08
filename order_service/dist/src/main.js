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
    app.setGlobalPrefix("orders");
    app.enableCors({
        origin: ["http://localhost:5173", "http://localhost:5174"],
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("order_service")
        .setVersion("1.0.0")
        .addServer(`http://localhost:${process.env.PORT || 3002}`, "Local Development")
        .addServer("https://tezbuy-order-service-backend.onrender.com", "Production")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        ignoreGlobalPrefix: false,
    });
    swagger_1.SwaggerModule.setup("api-docs", app, document);
    app.use("/swagger-json", (_, res) => res.json(document));
    app.use(tezbuy_packages_1.allowUrls);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: false,
        transform: true,
    }));
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get("PORT") || 4002;
    await app.listen(PORT, () => {
        console.log("Order service is running at " + PORT);
    });
    const rmqService = app.get(tezbuy_packages_1.RmqService);
    app.connectMicroservice(rmqService.getOptions("ORDER_SERVICE"));
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map