import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { PrismaService } from "apps/auth_service/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Module({
  controllers: [AdminController],
  providers: [AdminService, PrismaService, JwtService, CloudinaryService],
})
export class AdminModule {}
