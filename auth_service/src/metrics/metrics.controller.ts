import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { MetricsService } from "./metrics.service";
import { Response } from "express";
import { register } from "prom-client";

@Controller("metrics")
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  async getMetrics(@Res() res: Response) {
    const metrics = await register.metrics();
    res.setHeader("Content-Type", register.contentType);
    res.end(metrics);
  }
}
