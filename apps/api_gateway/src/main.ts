import { NestFactory } from "@nestjs/core";
import { ApiGatewayModule } from "./api-gateway.module";
import * as cookieParser from "cookie-parser";
import * as express from "express";

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const PORT = process.env.PORT || 3000;
  app.use(cookieParser());
  app.use(express.json());
  await app.listen(PORT, () => {
    console.log("api-gateway is running at " + PORT);
  });
}
bootstrap();
