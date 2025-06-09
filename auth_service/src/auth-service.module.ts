import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AdminModule } from "./admin/admin.module";
import { PunktAdminModule } from "./punkt-admin/punkt-admin.module";
import { CloudinaryModule } from "./cloudinary/cloudinary.module";
import { RmqService } from "tezbuy_packages";
import { MetricsModule } from "./metrics/metrics.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MetricsInterceptor } from "./metrics/metrics.interceptor";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/auth_service/.env",
      isGlobal: true,
    }),
    MetricsModule,
    UserModule,
    AdminModule,
    PunktAdminModule,
    CloudinaryModule,
  ],
  controllers: [],
  providers: [
    RmqService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MetricsInterceptor,
    },
  ],
})
export class AuthServiceModule {}
