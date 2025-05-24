import { NestFactory } from "@nestjs/core";
import { StaffServiceModule } from "./staff_service.module";
import { ConfigService } from "@nestjs/config";
import { RmqOptions } from "@nestjs/microservices";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { allowUrls } from "libs/common/src/cors_for_backend/middleware";
import { RmqService } from "libs/common/src";

async function bootstrap() {
  const app = await NestFactory.create(StaffServiceModule);

  // SWAGGER CONFIGURATION

  const config = new DocumentBuilder()
    .setTitle("staff_service")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.use("/swagger-json", (_, res) => res.json(document));

  // global middlewares
  app.setGlobalPrefix("staff");
  app.useGlobalPipes(new ValidationPipe());
  app.use(allowUrls);

  // microservice connecting
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions("STAFF_SERVICE"));
  await app.startAllMicroservices();

  // LISTENING PORT
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT") || 3005;
  await app.listen(PORT, () => {
    console.log("staff_service is running at " + PORT);
  });
}
bootstrap();
