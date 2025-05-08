import { Module } from "@nestjs/common";
import { AuthServiceController } from "./auth-service.controller";
import { AuthServiceService } from "./auth-service.service";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/auth-service/.env",
      isGlobal: true,
    }),
    UserModule,
    AdminModule,
  ],
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
