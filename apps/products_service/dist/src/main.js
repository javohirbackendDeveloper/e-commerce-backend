"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const products_service_module_1 = require("./products-service.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tezbuy_packages_1 = require("tezbuy_packages");
async function bootstrap() {
    const app = await core_1.NestFactory.create(products_service_module_1.ProductsServiceModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("products_service")
        .setVersion("1.0.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use("/swagger-json", (_, res) => res.json(document));
    app.setGlobalPrefix("products");
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: false,
        transform: true,
    }));
    app.use(tezbuy_packages_1.allowUrls);
    const rmqService = app.get(tezbuy_packages_1.RmqService);
    app.connectMicroservice(rmqService.getOptions("PRODUCTS_SERVICE"));
    await app.startAllMicroservices();
    const PORT = process.env.PORT || 3003;
    await app.listen(PORT, () => {
        console.log(`Products service is running at ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map