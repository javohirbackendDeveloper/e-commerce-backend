import { Module } from "@nestjs/common";
import { PunktService } from "./punkt.service";
import { PunktController } from "./punkt.controller";
import { RmqModule } from "@app/common";
import { PUNKT_SERVICE } from "../constants/services";
import { PrismaService } from "apps/punkt_service/prisma/prisma.service";

@Module({
  imports: [
    RmqModule.register({
      name: PUNKT_SERVICE,
    }),
    RmqModule.register({ name: "ORDER_SERVICE" }),
  ],
  controllers: [PunktController],
  providers: [PunktService, PrismaService],
})
export class PunktModule {}
