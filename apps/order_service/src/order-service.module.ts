import { Module } from "@nestjs/common";
import { OrderServiceController } from "./order-service.controller";
import { OrderServiceService } from "./order-service.service";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { RmqModule } from "@app/common";
import { PRODUCTS_SERVICE } from "./constants/services";
import { MongooseModule } from "@nestjs/mongoose";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/order_service/.env",
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_ORDER_SERVICE_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule.register({
      name: PRODUCTS_SERVICE,
    }),
  ],
  controllers: [OrderServiceController],
  providers: [OrderServiceService, PrismaService],
})
export class OrderServiceModule {}
