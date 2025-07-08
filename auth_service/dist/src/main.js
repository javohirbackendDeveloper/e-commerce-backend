"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const auth_service_module_1 = require("./auth-service.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
const tezbuy_packages_1 = require("tezbuy_packages");
const return_dto_1 = require("./user/dto/return.dto");
const return_dto_2 = require("./admin/dto/return.dto");
const return_dto_3 = require("./punkt-admin/dto/return.dto");
const tezbuy_packages_2 = require("tezbuy_packages");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_service_module_1.AuthServiceModule);
    app.setGlobalPrefix("auth");
    const extraModels = [
        return_dto_1.ReturnUserDto,
        return_dto_1.ReturnLoginUserDto,
        return_dto_1.ReturnUserMessageDto,
        return_dto_1.ReturnUserLogoutDto,
        return_dto_2.ReturnAdminLoginDto,
        return_dto_2.ReturnAdminLogoutDto,
        return_dto_2.ReturnAdminDto,
        return_dto_2.ReturnAdminLogoutDto,
        return_dto_3.ReturnPunktAdminDto,
        return_dto_3.ReturnLoginDto,
    ];
    const config = new swagger_1.DocumentBuilder()
        .setTitle("auth_service")
        .setVersion("1.0.0")
        .addServer(`http://localhost:${process.env.PORT || 4001}`, "Local Development")
        .addServer("https://e-commerce-backend-2-xcpq.onrender.com", "Production")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        extraModels,
        ignoreGlobalPrefix: false,
    });
    swagger_1.SwaggerModule.setup("api-docs", app, document);
    app.use("/swagger-json", (_, res) => res.json(document));
    app.use(tezbuy_packages_2.allowUrls);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        exceptionFactory: (errors) => {
            const formattedErrors = errors.map((error) => ({
                field: error.property,
                messages: Object.values(error.constraints || {}),
            }));
            return new common_1.BadRequestException({
                message: "Validation failed",
                errors: formattedErrors,
                statusCode: 400,
            });
        },
    }));
    app.use(cookieParser());
    const PORT = process.env.PORT || 4001;
    await app.listen(PORT, () => {
        console.log("auth_service is running on the " + PORT);
    });
    const rmqService = app.get(tezbuy_packages_1.RmqService);
    app.connectMicroservice(rmqService.getOptions("AUTH_SERVICE"));
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map