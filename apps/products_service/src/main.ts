// apps/products_service/src/main.ts
import { NestFactory } from "@nestjs/core";
import {
  MicroserviceOptions,
  RmqOptions,
  Transport,
} from "@nestjs/microservices";
import { ProductsServiceModule } from "./products-service.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { allowUrls } from "libs/common/src/cors_for_backend/middleware";
import { RmqService } from "libs/common/src";

async function bootstrap() {
  const app = await NestFactory.create(ProductsServiceModule);

  // SWAGGER CONFIGURATION

  const config = new DocumentBuilder()
    .setTitle("products_service")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.use("/swagger-json", (_, res) => res.json(document));

  // global middlewares
  app.setGlobalPrefix("products");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    })
  );
  // app.use(allowUrls);

  // microservice connecting
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(
    rmqService.getOptions("PRODUCTS_SERVICE")
  );
  await app.startAllMicroservices();

  // listening port
  const PORT = process.env.PORT || 3003;
  await app.listen(PORT, () => {
    console.log(`Products service is running at ${PORT}`);
  });
}
bootstrap();
