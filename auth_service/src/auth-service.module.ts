import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AdminModule } from "./admin/admin.module";
import { PunktAdminModule } from "./punkt-admin/punkt-admin.module";
import { CloudinaryModule } from "./cloudinary/cloudinary.module";
import { RmqService } from "tezbuy_packages";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/auth_service/.env",
      isGlobal: true,
    }),
    UserModule,
    AdminModule,
    PunktAdminModule,
    CloudinaryModule,
  ],
  controllers: [],
  providers: [RmqService],
})
export class AuthServiceModule {}
