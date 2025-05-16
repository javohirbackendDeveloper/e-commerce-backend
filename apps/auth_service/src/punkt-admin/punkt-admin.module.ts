import { Module } from "@nestjs/common";
import { PunktAdminService } from "./punkt-admin.service";
import { PunktAdminController } from "./punkt-admin.controller";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "apps/auth_service/prisma/prisma.service";

@Module({
  controllers: [PunktAdminController],
  providers: [PunktAdminService, PrismaService, JwtService],
})
export class PunktAdminModule {}
