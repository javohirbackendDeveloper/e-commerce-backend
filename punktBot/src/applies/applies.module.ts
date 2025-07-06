import { Module } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { AppliesController } from "./applies.controller";
import { PrismaService } from "prisma/prisma.service";

@Module({
  controllers: [AppliesController],
  providers: [AppliesService, PrismaService],
})
export class AppliesModule {}
