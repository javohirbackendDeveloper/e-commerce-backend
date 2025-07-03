"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const punktbot_module_1 = require("./punktbot.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tezbuy_packages_1 = require("tezbuy_packages");
async function bootstrap() {
    const app = await core_1.NestFactory.create(punktbot_module_1.StaffServiceModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("staff_service")
        .setVersion("1.0.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use("/swagger-json", (_, res) => res.json(document));
    app.setGlobalPrefix("punktbot");
    app.useGlobalPipes(new common_1.ValidationPipe());
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get("PORT") || 4005;
    await app.listen(PORT, () => {
        console.log("punkt bot is running at " + PORT);
    });
    const rmqService = app.get(tezbuy_packages_1.RmqService);
    app.connectMicroservice(rmqService.getOptions("PUNKTBOT"));
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map