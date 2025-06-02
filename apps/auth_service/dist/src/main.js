"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const auth_service_module_1 = require("./auth-service.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const all_exceptions_filters_1 = require("./filters/all-exceptions.filters");
const swagger_1 = require("@nestjs/swagger");
const rmq_service_1 = require("./rmq/rmq.service");
const middleware_1 = require("./cors_for_backend/middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_service_module_1.AuthServiceModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("auth_service")
        .setVersion("1.0.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use("/swagger-json", (_, res) => res.json(document));
    const rmqService = app.get(rmq_service_1.RmqService);
    app.connectMicroservice(rmqService.getOptions("AUTH_SERVICE"));
    await app.startAllMicroservices();
    app.use(middleware_1.allowUrls);
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
    const PORT = process.env.PORT;
    if (!PORT) {
        throw new Error("PORT is not defined. Make sure you're running in a proper environment.");
    }
    await app.listen(PORT, () => {
        console.log("auth_service is running at " + PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map