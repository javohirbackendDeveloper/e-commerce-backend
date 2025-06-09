import { NestFactory } from "@nestjs/core";
import { PunktServiceModule } from "./punkt_service.module";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { RmqOptions } from "@nestjs/microservices";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { allowUrls } from "libs/common/src/cors_for_backend/middleware";
import { RmqService } from "libs/common/src";

async function bootstrap() {
  const app = await NestFactory.create(PunktServiceModule);

  // SWAGGER CONFIGURATION

  const config = new DocumentBuilder()
    .setTitle("punkt_service")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.use("/swagger-json", (_, res) => res.json(document));

  // global middlewares
  app.setGlobalPrefix("punkts");
  app.useGlobalPipes(new ValidationPipe());
  app.use(allowUrls);

  // microservice connecting
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions("PUNKT_SERVICE"));
  await app.startAllMicroservices();

  // LISTENING PORT
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT") || 3004;
  await app.listen(PORT, () => {
    console.log("punkt_service is running at " + PORT);
  });
}
bootstrap();
