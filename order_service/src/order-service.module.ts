import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import { ORDER_SERVICE } from "./constants/services";
import { CartModule } from "./cart/cart.module";
import { OrderModule } from "./order/order.module";
import { RmqService } from "tezbuy_packages";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MetricsInterceptor } from "./metrics/metrics.interceptor";
import { MetricsModule } from "./metrics/metrics.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/order_service/.env",
      isGlobal: true,
    }),
    MetricsModule,
    CartModule,
    OrderModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    RmqService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MetricsInterceptor,
    },
  ],
})
export class OrderServiceModule {}
