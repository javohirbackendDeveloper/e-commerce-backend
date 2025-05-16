import { Module } from "@nestjs/common";
import { PunktAdminService } from "./punkt-admin.service";
import { PunktAdminController } from "./punkt-admin.controller";
import { PrismaService } from "apps/staff_service/prisma/prisma.service";

@Module({
  controllers: [PunktAdminController],
  providers: [PunktAdminService, PrismaService],
})
export class PunktAdminModule {}
