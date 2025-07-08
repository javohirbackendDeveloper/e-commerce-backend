import { Module } from "@nestjs/common";
import { UserPunktService } from "./user_punkt.service";
import { UserPunktController } from "./user_punkt.controller";
import { PrismaService } from "prisma/prisma.service";

@Module({
  controllers: [UserPunktController],
  providers: [UserPunktService, PrismaService],
})
export class UserPunktModule {}
