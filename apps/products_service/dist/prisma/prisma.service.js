"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const prisma_1 = require("../generated/prisma");
class PrismaService extends prisma_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        this.$on("beforeExit", async () => {
            await app.close();
        });
    }
}
exports.PrismaService = PrismaService;
//# sourceMappingURL=prisma.service.js.map