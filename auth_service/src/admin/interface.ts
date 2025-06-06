import { Admin } from "@prisma/client";
import { Request } from "express";

export interface AdminRequest extends Request {
  admin: Admin;
}
