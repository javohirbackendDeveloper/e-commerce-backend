import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RmqModule, RmqService } from "@app/common";
import { PrismaService } from "../prisma/prisma.service";
import { ORDER_SERVICE } from "./constants/services";
import { CartModule } from "./cart/cart.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/order_service/.env",
      isGlobal: true,
    }),

    RmqModule.register({
      name: ORDER_SERVICE,
    }),

    CartModule,
  ],
  controllers: [],
  providers: [, PrismaService, RmqService],
})
export class OrderServiceModule {}
