import { NestFactory } from "@nestjs/core";
import { ProductsServiceModule } from "./products-service.module";
import { RmqService } from "@app/common";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(ProductsServiceModule);
  const PORT = process.env.PORT || 3003;
  app.useGlobalPipes(new ValidationPipe());
  const rmqService = app.get<RmqService>(RmqService);
  const configService = app.get(ConfigService);
  app.connectMicroservice(
    rmqService.getOptions(
      configService.get<string>("RABBIT_MQ_PRODUCTS_SERVICE_QUEUE"),
      true
    )
  );
  app.startAllMicroservices();
  await app.listen(PORT, () => {
    console.log(`Product-Service is running at ` + PORT);
  });
}
bootstrap();
