import { NestFactory } from "@nestjs/core";
import {
  MicroserviceOptions,
  RmqOptions,
  Transport,
} from "@nestjs/microservices";
import { ProductsServiceModule } from "./products-service.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { allowUrls, RmqService } from "tezbuy_packages";

async function bootstrap() {
  const app = await NestFactory.create(ProductsServiceModule);

  app.setGlobalPrefix("products");

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle("Products Service API")
    .setDescription("E-commerce platform products management API")
    .setVersion("1.0.0")
    .addServer(
      `http://localhost:${process.env.PORT || 3003}`,
      "Local Development"
    )
    .addServer(
      "https://tezbuy-product-service-backend.onrender.com",
      "Production"
    )
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: false,
  });

  SwaggerModule.setup("api-docs", app, document);
  app.use("/swagger-json", (_, res) => res.json(document));

  //  Global Middlewares
  app.use(allowUrls);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    })
  );

  //  Microservice va HTTP Server
  const PORT = process.env.PORT || 4003;
  await app.listen(PORT, () => {
    console.log(`Products service is running at ${PORT}`);
    console.log(`Swagger UI: http://localhost:${PORT}/products/api-docs`);
    console.log(`Swagger JSON: http://localhost:${PORT}/products/swagger-json`);
  });

  //  Microservice Connection
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(
    rmqService.getOptions("PRODUCTS_SERVICE")
  );
  await app.startAllMicroservices();
}

bootstrap();
