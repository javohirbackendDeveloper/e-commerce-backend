import { NestFactory } from "@nestjs/core";
import { AuthServiceModule } from "./auth-service.module";
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { AllExceptionsFilter } from "./filters/all-exceptions.filters";
import { RmqService } from "@app/common";
import { RmqOptions } from "@nestjs/microservices";
import { allowUrls } from "@app/common/cors_for_backend/middleware";

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  app.use(allowUrls);

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions("AUTH_SERVICE"));
  await app.startAllMicroservices();

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

  const PORT = process.env.PORT || 3001;
  await app.listen(PORT, () => {
    console.log("auth_service is running at " + PORT);
  });
}
bootstrap();
