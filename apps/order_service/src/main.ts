// apps/order_service/src/main.ts
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { OrderServiceModule } from "./order-service.module";
import { ClientProxy } from "@nestjs/microservices";
import { allowUrls } from "@app/common/cors_for_backend/middleware";

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);
  app.useGlobalPipes(new ValidationPipe());

  app.use(allowUrls);
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT") || 3002;
  await app.listen(PORT, () => {
    console.log("Order service is running at " + PORT);
  });
}
bootstrap();
