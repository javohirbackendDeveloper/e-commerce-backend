import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { CategoryService } from "../category/category.service";
import { SearchService } from "../search/search.service";
import { SearchModule } from "../search/search.module";

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, PrismaService, CategoryService, SearchService],
  exports: [],
})
export class ProductModule {}
