import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { PrismaService } from "prisma/prisma.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService, CloudinaryService],
})
export class CategoryModule {}
