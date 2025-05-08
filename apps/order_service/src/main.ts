import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { OrderServiceModule } from "./order-service.module";

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT") || 3002;
  await app.listen(PORT, () => {
    console.log("Order service is running at " + PORT);
  });
}
bootstrap();
