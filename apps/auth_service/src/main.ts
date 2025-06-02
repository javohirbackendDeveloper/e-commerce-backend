import { NestFactory } from "@nestjs/core";
import { AuthServiceModule } from "./auth-service.module";
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { AllExceptionsFilter } from "./filters/all-exceptions.filters";
import { RmqOptions } from "@nestjs/microservices";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { RmqService } from "./rmq/rmq.service";
import { allowUrls } from "./cors_for_backend/middleware";

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  // SWAGGER CONFIGURATION

  const config = new DocumentBuilder()
    .setTitle("auth_service")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app as any, config);
  SwaggerModule.setup("api", app as any, document);

  app.use("/swagger-json", (_, res) => res.json(document));

  // Connecting to microservice
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions("AUTH_SERVICE"));
  await app.startAllMicroservices();

  // GLOBAL MIDDLEWARES

  app.use(allowUrls);
  app.setGlobalPrefix("auth");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const formattedErrors = errors.map((error) => ({
          field: error.property,
          messages: Object.values(error.constraints || {}),
        }));

        return new BadRequestException({
          message: "Validation failed",
          errors: formattedErrors,
          statusCode: 400,
        });
      },
    })
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(cookieParser());

  // Listening port
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT, () => {
    console.log("auth_service is running at " + PORT);
  });
}
bootstrap();
