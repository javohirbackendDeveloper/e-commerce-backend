import { NextFunction, Request, Response } from "express";

export const allowUrls = (req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = [process.env.API_GATEWAY_URL];
  const origin = req.headers?.x_allowed_origin;

  if (!allowedOrigins.includes(origin as string)) {
    return res.json({
      message: "Access denied",
    });
  }

  next();
};
