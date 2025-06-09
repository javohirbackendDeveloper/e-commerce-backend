import { Module } from "@nestjs/common";
import { ApiGatewayController } from "./api-gateway.controller";
import { ApiGatewayService } from "./api-gateway.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import {
  AUTH_SERVICE,
  ORDER_SERVICE,
  PRODUCTS_SERVICE,
} from "./constants/services";
import { RmqModule } from "tezbuy_packages";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 10000,
          limit: 4,
        },
      ],
    }),
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: "./.env",
      isGlobal: true,
    }),
    RmqModule.register({
      name: ORDER_SERVICE,
    }),
    RmqModule.register({
      name: PRODUCTS_SERVICE,
    }),
    RmqModule.register({
      name: AUTH_SERVICE,
    }),
  ],
  controllers: [ApiGatewayController],
  providers: [
    ApiGatewayService,
    ConfigService,
    {
      useClass: ThrottlerGuard,
      provide: APP_GUARD,
    },
  ],
})
export class ApiGatewayModule {}
