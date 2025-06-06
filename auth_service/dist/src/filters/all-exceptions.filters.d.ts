import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
    private handlePrismaError;
    private getErrorMessage;
}
