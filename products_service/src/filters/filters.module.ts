import { Module } from "@nestjs/common";
import { FiltersService } from "./filters.service";
import { FiltersController } from "./filters.controller";
import { PrismaService } from "prisma/prisma.service";
import { CategoryService } from "../category/category.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Module({
  controllers: [FiltersController],
  providers: [
    FiltersService,
    PrismaService,
    CategoryService,
    CloudinaryService,
  ],
})
export class FiltersModule {}
