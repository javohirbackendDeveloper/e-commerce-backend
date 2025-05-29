import { Admin } from "apps/auth_service/generated/prisma";
import { Request } from "express";

export interface AdminRequest extends Request {
  admin: Admin;
}
