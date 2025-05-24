import { Module } from "@nestjs/common";
import { BrandService } from "./brand.service";
import { BrandController } from "./brand.controller";
import { CategoryService } from "../category/category.service";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Module({
  controllers: [BrandController],
  providers: [BrandService, CategoryService, PrismaService, CloudinaryService],
})
export class BrandModule {}
