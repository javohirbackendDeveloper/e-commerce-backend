import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PunktModule } from "./punkt/punkt.module";
import { PUNKT_SERVICE } from "./constants/services";
import { RmqService } from "tezbuy_packages";
import { LocationModule } from "./location/location.module";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/punkt_service/.env",
      isGlobal: true,
    }),

    PunktModule,
    LocationModule,
  ],
  controllers: [],
  providers: [RmqService],
})
export class PunktServiceModule {}
