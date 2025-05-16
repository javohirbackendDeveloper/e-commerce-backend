import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AdminModule } from "./admin/admin.module";
import { RmqService } from "@app/common";
import { PunktAdminModule } from "./punkt-admin/punkt-admin.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/auth_service/.env",
      isGlobal: true,
    }),
    UserModule,
    AdminModule,
    PunktAdminModule,
  ],
  controllers: [],
  providers: [RmqService],
})
export class AuthServiceModule {}
