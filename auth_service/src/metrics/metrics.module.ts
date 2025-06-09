import { Module } from "@nestjs/common";
import { MetricsService } from "./metrics.service";
import { MetricsController } from "./metrics.controller";
import { MetricsInterceptor } from "./metrics.interceptor";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
  controllers: [MetricsController],
  providers: [MetricsService],
  exports: [MetricsService],
})
export class MetricsModule {}
