import { Module, OnModuleInit } from "@nestjs/common";
import { SearchService } from "./search.service";
import { SearchController } from "./search.controller";
import { ElasticsearchModule } from "@nestjs/elasticsearch";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { ProductModule } from "../product/product.module";
import { ProductService } from "../product/product.service";
import { CategoryService } from "../category/category.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Module({
  imports: [],
  controllers: [SearchController],
  providers: [
    SearchService,
    PrismaService,
    ProductService,
    CategoryService,
    CloudinaryService,
  ],
  exports: [],
})
export class SearchModule {}
// implements OnModuleInit {
//   constructor(private readonly searchService: SearchService) {}

// public async onModuleInit() {
//   await this.searchService.createindex();
// }
// }
