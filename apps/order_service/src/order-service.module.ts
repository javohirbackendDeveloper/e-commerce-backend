import { Module } from "@nestjs/common";
import { OrderServiceController } from "./order-service.controller";
import { OrderServiceService } from "./order-service.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RmqModule, RmqService } from "@app/common";
import { PrismaService } from "../prisma/prisma.service";
import { ORDER_SERVICE } from "./constants/services";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/order_service/.env",
      isGlobal: true,
    }),

    RmqModule.register({
      name: ORDER_SERVICE,
    }),
  ],
  controllers: [OrderServiceController],
  providers: [OrderServiceService, PrismaService, RmqService],
})
export class OrderServiceModule {}
