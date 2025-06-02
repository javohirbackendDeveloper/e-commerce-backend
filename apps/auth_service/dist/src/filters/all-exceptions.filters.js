"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma/index.js");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = 500;
        let message = "Internal server error";
        let error = "Internal server error";
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const response = exception.getResponse();
            message = typeof response === "object" ? response["message"] : response;
            error = exception.name.replace("Exception", "");
        }
        else if (exception instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
            status = this.handlePrismaError(exception);
            message = this.getErrorMessage(exception);
            error: "Database Error";
        }
        else if (exception instanceof Error) {
            message: exception.message;
        }
        response.status(status).json({
            statusCode: status,
            message,
            timeStamp: new Date().toISOString(),
            path: request.url,
            error,
            success: false,
        });
    }
    handlePrismaError(error) {
        switch (error.code) {
            case "P2002":
                return 409;
            case "P2025":
                return 404;
            default:
                return 500;
        }
    }
    getErrorMessage(error) {
        var _a;
        switch (error.code) {
            case "P2002":
                return `Unique constraints failed on  ${(_a = error.meta) === null || _a === void 0 ? void 0 : _a.target}`;
            case "P2025":
                return `Prisma not found error`;
            default:
                return `Database operation failed`;
        }
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exceptions.filters.js.map