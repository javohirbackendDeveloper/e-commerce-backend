import { Module } from "@nestjs/common";
import { OrderServiceController } from "./order-service.controller";
import { OrderServiceService } from "./order-service.service";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/orders-service/.env",
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_ORDERS: Joi.string().required(),
      }),
    }),
  ],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
