import {
  CallHandler,
  ExecutionContext,
  forwardRef,
  Inject,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { MetricsService } from "./metrics.service";

@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(private readonly metricsService: MetricsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("MetricsService metodlari:", Object.keys(this.metricsService));

    console.log(
      "MetricsService instancemi?",
      this.metricsService instanceof MetricsService
    );

    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const route = request.route?.path || request.url;

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode.toString();
        this.metricsService.incrementRequest(method, route, statusCode);
      })
    );
  }
}
