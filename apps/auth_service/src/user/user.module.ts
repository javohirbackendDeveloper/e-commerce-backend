import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PrismaService } from "apps/auth_service/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtService, AdminService],
})
export class UserModule {}
