import { MetricsService } from "./metrics.service";
import { Response } from "express";
export declare class MetricsController {
    private readonly metricsService;
    constructor(metricsService: MetricsService);
    getMetrics(res: Response): Promise<void>;
}
