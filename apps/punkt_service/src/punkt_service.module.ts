import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PunktModule } from "./punkt/punkt.module";
import { RmqModule, RmqService } from "@app/common";
import { PUNKT_SERVICE } from "./constants/services";

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
