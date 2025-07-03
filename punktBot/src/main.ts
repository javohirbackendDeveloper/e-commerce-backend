import { NestFactory } from "@nestjs/core";
import { StaffServiceModule } from "./punktbot.module";
import { ConfigService } from "@nestjs/config";
import { RmqOptions } from "@nestjs/microservices";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { allowUrls, RmqService } from "tezbuy_packages";

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
  app.setGlobalPrefix("punktbot");
  app.useGlobalPipes(new ValidationPipe());
  // app.use(allowUrls);

  // LISTENING PORT
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT") || 4005;
  await app.listen(PORT, () => {
    console.log("punkt bot is running at " + PORT);
  });

  // microservice connecting
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions("PUNKTBOT"));
  await app.startAllMicroservices();
}
bootstrap();
