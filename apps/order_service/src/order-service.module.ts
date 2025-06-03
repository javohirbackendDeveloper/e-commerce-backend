import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import { ORDER_SERVICE } from "./constants/services";
import { CartModule } from "./cart/cart.module";
import { OrderModule } from "./order/order.module";
import { RmqService } from "tezbuy_packages";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/order_service/.env",
      isGlobal: true,
    }),

    CartModule,
    OrderModule,
  ],
  controllers: [],
  providers: [PrismaService, RmqService],
})
export class OrderServiceModule {}
