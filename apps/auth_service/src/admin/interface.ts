import { Request } from "express";
import { Admin } from "generated/prisma";

export interface AdminRequest extends Request {
  admin: Admin;
}
