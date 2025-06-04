"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const products_service_module_1 = require("./products-service.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tezbuy_packages_1 = require("tezbuy_packages");
async function bootstrap() {
    const app = await core_1.NestFactory.create(products_service_module_1.ProductsServiceModule);
    app.setGlobalPrefix("products");
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Products Service API")
        .setDescription("E-commerce platform products management API")
        .setVersion("1.0.0")
        .addServer(`http://localhost:${process.env.PORT || 3003}`, "Local Development")
        .addServer("https://tezbuy-products-service-backend.onrender.com", "Production")
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
    const PORT = process.env.PORT || 4003;
    await app.listen(PORT, () => {
        console.log(`Products service is running at ${PORT}`);
        console.log(`Swagger UI: http://localhost:${PORT}/products/api-docs`);
        console.log(`Swagger JSON: http://localhost:${PORT}/products/swagger-json`);
    });
    const rmqService = app.get(tezbuy_packages_1.RmqService);
    app.connectMicroservice(rmqService.getOptions("PRODUCTS_SERVICE"));
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map