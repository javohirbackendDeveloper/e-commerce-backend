import { Module } from "@nestjs/common";
import { PunktService } from "./punkt.service";
import { PunktController } from "./punkt.controller";
import {
  ORDER_SERVICE,
  PUNKT_SERVICE,
  PUNKTBOT,
  STAFF_SERVICE,
} from "../constants/services";
import { RmqModule } from "tezbuy_packages";
import { PrismaService } from "prisma/prisma.service";
import { HttpModule, HttpService } from "@nestjs/axios";

@Module({
  imports: [
    RmqModule.register({
      name: PUNKT_SERVICE,
    }),
    RmqModule.register({ name: ORDER_SERVICE }),
    RmqModule.register({ name: STAFF_SERVICE }),
    RmqModule.register({ name: PUNKTBOT }),
    HttpModule,
  ],
  controllers: [PunktController],
  providers: [PunktService, PrismaService],
})
export class PunktModule {}
