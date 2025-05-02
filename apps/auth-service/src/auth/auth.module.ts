import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserService } from "../user/user.service";
import { PrismaUser } from "apps/auth-service/prisma/prisma.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaUser],
})
export class AuthModule {}
