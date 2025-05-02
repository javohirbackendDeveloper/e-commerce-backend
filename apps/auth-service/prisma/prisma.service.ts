import { INestApplication, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../generated/prisma";

export class PrismaUser extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit" as never, async () => {
      await app.close();
    });
  }
}
