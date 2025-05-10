import { Module } from "@nestjs/common";
import { AuthServiceController } from "./auth-service.controller";
import { AuthServiceService } from "./auth-service.service";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AdminModule } from "./admin/admin.module";
import { RmqService } from "@app/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/auth_service/.env",
      isGlobal: true,
    }),
    UserModule,
    AdminModule,
  ],
  controllers: [AuthServiceController],
  providers: [AuthServiceService, RmqService],
})
export class AuthServiceModule {}
