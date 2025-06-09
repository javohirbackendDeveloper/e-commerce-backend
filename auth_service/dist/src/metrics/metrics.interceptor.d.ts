import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { MetricsService } from "./metrics.service";
export declare class MetricsInterceptor implements NestInterceptor {
    private readonly metricsService;
    constructor(metricsService: MetricsService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
