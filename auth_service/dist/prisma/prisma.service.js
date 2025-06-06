"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const client_1 = require("@prisma/client");
class PrismaService extends client_1.PrismaClient {
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