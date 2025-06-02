"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const auth_service_module_1 = require("../src/auth-service.module");
describe("AuthServiceController (e2e)", () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [auth_service_module_1.AuthServiceModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    it("/ (GET)", () => {
        return request(app.getHttpServer())
            .get("/")
            .expect(200)
            .expect("Hello World!");
    });
});
//# sourceMappingURL=app.e2e-spec.js.map