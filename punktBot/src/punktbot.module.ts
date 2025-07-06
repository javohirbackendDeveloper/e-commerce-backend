import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "prisma/prisma.service";
import { RmqModule, RmqService } from "tezbuy_packages";
import { ApplyBotModule } from "./apply-bot/apply-bot.module";
import { AppliesModule } from './applies/applies.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    RmqModule.register({
      name: "PUNKT_SERVICE",
    }),
    ApplyBotModule,
    AppliesModule,
  ],
  controllers: [],
  providers: [RmqService, PrismaService],
})
export class StaffServiceModule {}
