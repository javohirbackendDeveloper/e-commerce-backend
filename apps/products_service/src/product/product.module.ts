import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { CategoryService } from "../category/category.service";
import { SearchService } from "../search/search.service";
import { SearchModule } from "../search/search.module";
import { RmqModule } from "@app/common";

@Module({
  imports: [RmqModule.register({ name: "ORDER_SERVICE" })],
  controllers: [ProductController],
  providers: [ProductService, PrismaService, CategoryService, SearchService],
  exports: [],
})
export class ProductModule {}
