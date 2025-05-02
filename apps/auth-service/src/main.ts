import { NestFactory } from "@nestjs/core";
import { AuthServiceModule } from "./auth-service.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.port ?? 3000);
}
bootstrap();
