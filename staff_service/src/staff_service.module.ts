import { Module } from "@nestjs/common";
import { PunktAdminModule } from "./punkt-admin/punkt-admin.module";
import { ConfigModule } from "@nestjs/config";
import { PunktAdminService } from "./punkt-admin/punkt-admin.service";
import { PrismaService } from "../prisma/prisma.service";
import { RmqModule, RmqService } from "tezbuy_packages";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/staff_service/.env",
      isGlobal: true,
    }),
    PunktAdminModule,
    RmqModule.register({
      name: "PUNKT_SERVICE",
    }),
  ],
  controllers: [],
  providers: [RmqService, PunktAdminService, PrismaService],
})
export class StaffServiceModule {}
