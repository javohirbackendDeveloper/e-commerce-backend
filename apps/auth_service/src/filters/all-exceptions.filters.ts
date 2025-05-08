import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import { Prisma } from "apps/auth_service/generated/prisma";
import { Request, Response } from "express";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = 500;
    let message = "Internal server error";
    let error = "Internal server error";

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const response = exception.getResponse();
      message = typeof response === "object" ? response["message"] : response;
      error = exception.name.replace("Exception", "");
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      status = this.handlePrismaError(exception);
      message = this.getErrorMessage(exception);
      error: "Database Error";
    } else if (exception instanceof Error) {
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

  private handlePrismaError(
    error: Prisma.PrismaClientKnownRequestError
  ): number {
    switch (error.code) {
      case "P2002":
        return 409;
      case "P2025":
        return 404;
      default:
        return 500;
    }
  }

  private getErrorMessage(error: Prisma.PrismaClientKnownRequestError): string {
    switch (error.code) {
      case "P2002":
        return `Unique constraints failed on  ${error.meta?.target}`;
      case "P2025":
        return `Prisma not found error`;
      default:
        return `Database operation failed`;
    }
  }
}
