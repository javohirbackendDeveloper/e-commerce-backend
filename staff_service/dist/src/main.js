"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const staff_service_module_1 = require("./staff_service.module");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const tezbuy_packages_1 = require("tezbuy_packages");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(staff_service_module_1.StaffServiceModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("staff_service")
        .setVersion("1.0.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use("/swagger-json", (_, res) => res.json(document));
    app.setGlobalPrefix("staff");
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(tezbuy_packages_1.allowUrls);
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get("PORT") || 4006;
    await app.listen(PORT, () => {
        console.log("staff_service is running at " + PORT);
    });
    const rmqService = app.get(tezbuy_packages_1.RmqService);
    app.connectMicroservice(rmqService.getOptions("STAFF_SERVICE"));
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map