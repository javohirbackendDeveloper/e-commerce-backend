import { NestFactory } from "@nestjs/core";
import { StaffServiceModule } from "./staff_service.module";
import { ConfigService } from "@nestjs/config";
import { RmqService } from "@app/common";
import { RmqOptions } from "@nestjs/microservices";
import { allowUrls } from "@app/common/cors_for_backend/middleware";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(StaffServiceModule);

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
