"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowUrls = void 0;
const allowUrls = (req, res, next) => {
    var _a;
    const allowedOrigins = [process.env.API_GATEWAY_URL];
    const origin = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.x_allowed_origin;
    if (!allowedOrigins.includes(origin)) {
        return res.json({
            message: "Access denied",
        });
    }
    next();
};
exports.allowUrls = allowUrls;
//# sourceMappingURL=middleware.js.map