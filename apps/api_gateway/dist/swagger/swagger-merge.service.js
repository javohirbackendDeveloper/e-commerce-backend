"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMergedSwaggerApis = getMergedSwaggerApis;
const axios_1 = require("axios");
const swagger_config_1 = require("./swagger.config");
async function getMergedSwaggerApis() {
    var _a;
    const merged = {
        openapi: "3.0.0",
        info: {
            title: "E-commerce api docs",
            version: "1.0.0",
        },
        paths: {},
        components: {
            schemas: {},
        },
    };
    for (const service of swagger_config_1.services) {
        const res = await axios_1.default.get(service.url);
        const doc = res.data;
        Object.assign(merged.paths, doc.paths);
        Object.assign(merged.components.schemas, ((_a = doc.components) === null || _a === void 0 ? void 0 : _a.schemas) || {});
    }
    return merged;
}
//# sourceMappingURL=swagger-merge.service.js.map