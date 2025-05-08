import { Module } from "@nestjs/common";
import { ProductsServiceController } from "./products-service.controller";
import { ProductsServiceService } from "./products-service.service";
import { ConfigModule } from "@nestjs/config";
import { ProductPrismaService } from "../prisma/prisma.service";
import { RmqModule, RmqService } from "@app/common";
import * as Joi from "joi";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/products_service/.env",
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_PRODUCTS_SERVICE_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule,
  ],
  controllers: [ProductsServiceController],
  providers: [ProductsServiceService, ProductPrismaService, RmqService],
})
export class ProductsServiceModule {}
