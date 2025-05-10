// apps/products_service/src/main.ts
import { NestFactory } from "@nestjs/core";
import {
  MicroserviceOptions,
  RmqOptions,
  Transport,
} from "@nestjs/microservices";
import { ProductsServiceModule } from "./products-service.module";
import { RmqService } from "@app/common";
import { allowUrls } from "@app/common/cors_for_backend/middleware";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(ProductsServiceModule);

  // global middlewares
  app.setGlobalPrefix("products");
  app.useGlobalPipes(new ValidationPipe());
  app.use(allowUrls);

  // microservice connecting
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions("ORDER_SERVICE"));
  await app.startAllMicroservices();

  // lestening port
  const PORT = process.env.PORT || 3003;
  await app.listen(PORT, () => {
    console.log(`Products service is running at ${PORT}`);
  });
}
bootstrap();
