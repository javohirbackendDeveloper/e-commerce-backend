"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const auth_service_module_1 = require("./auth-service.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const all_exceptions_filters_1 = require("./filters/all-exceptions.filters");
const swagger_1 = require("@nestjs/swagger");
const rmq_service_1 = require("./rmq/rmq.service");
const return_dto_1 = require("./user/dto/return.dto");
const return_dto_2 = require("./admin/dto/return.dto");
const return_dto_3 = require("./punkt-admin/dto/return.dto");
const tezbuy_packages_1 = require("tezbuy_packages");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_service_module_1.AuthServiceModule);
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
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        extraModels,
    });
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use("/swagger-json", (_, res) => res.json(document));
    app.use(tezbuy_packages_1.allowUrls);
    app.setGlobalPrefix("auth");
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
    app.useGlobalFilters(new all_exceptions_filters_1.AllExceptionsFilter());
    app.use(cookieParser());
    const PORT = process.env.PORT || 4001;
    await app.listen(PORT, () => {
        console.log("auth_service is running on the " + PORT);
    });
    const rmqService = app.get(rmq_service_1.RmqService);
    app.connectMicroservice(rmqService.getOptions("AUTH_SERVICE"));
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map