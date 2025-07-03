import { Module } from "@nestjs/common";
import { ApplyBotService } from "./apply-bot.service";
import { ApplyBotController } from "./apply-bot.controller";
import { TelegrafModule } from "nestjs-telegraf";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { session } from "telegraf";
import { PrismaService } from "prisma/prisma.service";
import { RmqModule } from "tezbuy_packages";
import { PUNKT_SERVICE } from "src/constants/services";

const BOTTOKEN = process.env.PUNKT_BOT_TOKEN;
@Module({
  imports: [
    TelegrafModule.forRoot({
      token: BOTTOKEN,
      middlewares: [session()],
    }),
    RmqModule.register({
      name: PUNKT_SERVICE,
    }),
  ],
  controllers: [],
  providers: [ApplyBotService, ApplyBotController, PrismaService],
})
export class ApplyBotModule {}
