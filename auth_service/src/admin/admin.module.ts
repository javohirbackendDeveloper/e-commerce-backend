import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { JwtService } from "@nestjs/jwt";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { PrismaService } from "prisma/prisma.service";

@Module({
  controllers: [AdminController],
  providers: [AdminService, PrismaService, JwtService, CloudinaryService],
})
export class AdminModule {}
