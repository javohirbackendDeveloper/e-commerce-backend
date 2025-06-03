import { Module } from "@nestjs/common";
import { CouponsService } from "./coupons.service";
import { CouponsController } from "./coupons.controller";
import { PrismaService } from "prisma/prisma.service";

@Module({
  controllers: [CouponsController],
  providers: [CouponsService, PrismaService],
})
export class CouponsModule {}
