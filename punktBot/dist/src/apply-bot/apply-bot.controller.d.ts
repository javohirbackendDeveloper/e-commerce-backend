import { ApplyBotService } from "./apply-bot.service";
import { Message } from "telegraf/typings/core/types/typegram";
import { MyContext } from "./session.interface";
import { PrismaService } from "prisma/prisma.service";
import { ClientProxy } from "@nestjs/microservices";
export declare class ApplyBotController {
    private readonly prismaService;
    private readonly applyBotService;
    private readonly punktClient;
    constructor(prismaService: PrismaService, applyBotService: ApplyBotService, punktClient: ClientProxy);
    onStart(ctx: MyContext): Promise<void>;
    onText(ctx: MyContext): Promise<Message.TextMessage>;
    onCallbackQuery(ctx: MyContext): Promise<true | Message.TextMessage>;
    onLocation(ctx: MyContext): Promise<void>;
}
