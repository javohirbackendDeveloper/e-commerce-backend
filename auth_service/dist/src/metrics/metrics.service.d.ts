export declare class MetricsService {
    private readonly httpRequestCounter;
    constructor();
    incrementRequest(method: string, route: string, statusCode: string): void;
}
