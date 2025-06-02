import { NestFactory } from "@nestjs/core";
import { AuthServiceModule } from "./auth-service.module";
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { AllExceptionsFilter } from "./filters/all-exceptions.filters";
import { RmqOptions } from "@nestjs/microservices";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { RmqService } from "./rmq/rmq.service";
import { allowUrls } from "./cors_for_backend/middleware";
import {
  ReturnLoginUserDto,
  ReturnUserDto,
  ReturnUserLogoutDto,
  ReturnUserMessageDto,
} from "./user/dto/return.dto";
import {
  ReturnAdminDto,
  ReturnAdminLoginDto,
  ReturnAdminLogoutDto,
} from "./admin/dto/return.dto";
import {
  ReturnLoginDto,
  ReturnPunktAdminDto,
} from "./punkt-admin/dto/return.dto";

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  // SWAGGER CONFIGURATION
  const extraModels = [
    // user module
    ReturnUserDto,
    ReturnLoginUserDto,
    ReturnUserMessageDto,
    ReturnUserLogoutDto,

    // admin module
    ReturnAdminLoginDto,
    ReturnAdminLogoutDto,
    ReturnAdminDto,
    ReturnAdminLogoutDto,

    // punkt admin

    ReturnPunktAdminDto,
    ReturnLoginDto,
  ];
  const config = new DocumentBuilder()
    .setTitle("auth_service")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app as any, config, {
    extraModels,
  });
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
  const port = parseInt(process.env.PORT || "8080", 10);

  await app.listen(port, "0.0.0.0", () => {
    console.log("auth_service is running on the " + port);
  });
}
bootstrap();
