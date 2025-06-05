import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { CategoryService } from "../category/category.service";
import { SearchService } from "../search/search.service";
import { SearchModule } from "../search/search.module";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { RmqModule } from "tezbuy_packages";
import { PrismaService } from "prisma/prisma.service";
@Module({
  imports: [RmqModule.register({ name: "ORDER_SERVICE" })],
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    CategoryService,
    SearchService,
    CloudinaryService,
  ],
  exports: [],
})
export class ProductModule {}
