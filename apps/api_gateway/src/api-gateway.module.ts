import { Module } from "@nestjs/common";
import { ApiGatewayController } from "./api-gateway.controller";
import { ApiGatewayService } from "./api-gateway.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { RmqModule } from "@app/common";
import {
  AUTH_SERVICE,
  ORDER_SERVICE,
  PRODUCTS_SERVICE,
} from "./constants/services";

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: "./apps/api_gateway/.env",
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
  providers: [ApiGatewayService, ConfigService],
})
export class ApiGatewayModule {}
