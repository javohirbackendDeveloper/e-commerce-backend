import { NestFactory } from "@nestjs/core";
import { OrderServiceModule } from "./order-service.module";
import { RmqService } from "@app/common";

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions("ORDER-SEVICE", false));
  await app.startAllMicroservices();
}
bootstrap();
