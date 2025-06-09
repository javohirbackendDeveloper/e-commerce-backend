import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PunktModule } from "./punkt/punkt.module";
import { PUNKT_SERVICE } from "./constants/services";
import { RmqService } from "libs/common/src";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/punkt_service/.env",
      isGlobal: true,
    }),

    PunktModule,
  ],
  controllers: [],
  providers: [RmqService],
})
export class PunktServiceModule {}
