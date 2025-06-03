// apps/order_service/src/main.ts
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { OrderServiceModule } from "./order-service.module";
import { ClientProxy } from "@nestjs/microservices";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { allowUrls } from "tezbuy_packages";
async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);

  app.use(allowUrls);
  app.setGlobalPrefix("orders");

  // SWAGGER CONFIGURATION
  const config = new DocumentBuilder()
    .setTitle("order_service")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: false,
  });

  SwaggerModule.setup("api-docs", app, document);
  app.use("/swagger-json", (_, res) => res.json(document));

  // global middlewares
  app.useGlobalPipes(new ValidationPipe());

  // listening port
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT") || 3002;
  await app.listen(PORT, () => {
    console.log("Order service is running at " + PORT);
  });
}
bootstrap();
