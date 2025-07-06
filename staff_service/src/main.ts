import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { StaffServiceModule } from "./staff_service.module";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { allowUrls, RmqService } from "tezbuy_packages";
import { ConfigService } from "@nestjs/config";
import { RmqOptions } from "@nestjs/microservices";
async function bootstrap() {
  const app = await NestFactory.create(StaffServiceModule);

  // SWAGGER CONFIGURATION

  const config = new DocumentBuilder()
    .setTitle("staff_service")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.use("/swagger-json", (_, res) => res.json(document));

  // global middlewares
  app.setGlobalPrefix("staff");
  app.useGlobalPipes(new ValidationPipe());
  app.use(allowUrls);

  // LISTENING PORT
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT") || 4006;
  await app.listen(PORT, () => {
    console.log("staff_service is running at " + PORT);
  });
  // microservice connecting
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions("STAFF_SERVICE"));
  await app.startAllMicroservices();
}
bootstrap();
