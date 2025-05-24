// apps/order_service/src/main.ts
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { OrderServiceModule } from "./order-service.module";
import { ClientProxy } from "@nestjs/microservices";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { allowUrls } from "libs/common/src/cors_for_backend/middleware";

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);

  // SWAGGER CONFIGURATION

  const config = new DocumentBuilder()
    .setTitle("order_service")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.use("/swagger-json", (_, res) => res.json(document));

  // global middlewares
  app.useGlobalPipes(new ValidationPipe());
  app.use(allowUrls);
  app.setGlobalPrefix("orders");

  // listening port
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT") || 3002;
  await app.listen(PORT, () => {
    console.log("Order service is running at " + PORT);
  });
}
bootstrap();
