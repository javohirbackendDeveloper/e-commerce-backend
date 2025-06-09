import { Injectable } from "@nestjs/common";
import { Counter, register } from "prom-client";

@Injectable()
export class MetricsService {
  private readonly httpRequestCounter: Counter<string>;
  constructor() {
    const existMetric = register.getSingleMetric(
      "auth_service_http_requests_total"
    );

    this.httpRequestCounter = existMetric
      ? (existMetric as Counter<string>)
      : new Counter({
          name: "auth_service_http_requests_total",
          help: "Total number of auth service http requests",
          labelNames: ["method", "route", "status_code"],
        });
  }

  incrementRequest(method: string, route: string, statusCode: string) {
    this.httpRequestCounter.inc({
      method,
      route,
      status_code: statusCode,
    });
  }
}
