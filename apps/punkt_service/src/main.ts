import { NestFactory } from "@nestjs/core";
import { PunktServiceModule } from "./punkt_service.module";
import { ConfigService } from "@nestjs/config";
import { allowUrls } from "@app/common/cors_for_backend/middleware";
import { ValidationPipe } from "@nestjs/common";
import { RmqService } from "@app/common";
import { RmqOptions } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(PunktServiceModule);

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
