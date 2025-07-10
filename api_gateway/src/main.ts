import { NestFactory } from "@nestjs/core";
import { ApiGatewayModule } from "./api-gateway.module";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import { getMergedSwaggerApis } from "./swagger/swagger-merge.service";
import * as swaggerUi from "swagger-ui-express";

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const PORT = process.env.PORT || 4000;

  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.enableCors({
    origin: ["https://e-commerce-admin-panel-indol.vercel.app/"],
    credentials: true,
  });

  // SWAGGER CONFIGURATION

  const mergedSwagger = await getMergedSwaggerApis();
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(mergedSwagger));

  // LISTENING PORT
  await app.listen(PORT, () => {
    console.log("api-gateway is working at " + PORT);
  });
}
bootstrap();
