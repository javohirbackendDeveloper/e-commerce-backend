"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const metrics_service_1 = require("./metrics.service");
let MetricsInterceptor = class MetricsInterceptor {
    constructor(metricsService) {
        this.metricsService = metricsService;
    }
    intercept(context, next) {
        var _a;
        console.log("MetricsService metodlari:", Object.keys(this.metricsService));
        console.log("MetricsService instancemi?", this.metricsService instanceof metrics_service_1.MetricsService);
        const request = context.switchToHttp().getRequest();
        const method = request.method;
        const route = ((_a = request.route) === null || _a === void 0 ? void 0 : _a.path) || request.url;
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            const response = context.switchToHttp().getResponse();
            const statusCode = response.statusCode.toString();
            this.metricsService.incrementRequest(method, route, statusCode);
        }));
    }
};
exports.MetricsInterceptor = MetricsInterceptor;
exports.MetricsInterceptor = MetricsInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [metrics_service_1.MetricsService])
], MetricsInterceptor);
//# sourceMappingURL=metrics.interceptor.js.map