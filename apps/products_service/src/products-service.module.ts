import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as Joi from "joi";
import { RmqModule, RmqService } from "@app/common";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { PrismaService } from "../prisma/prisma.service";
import { CommentsModule } from "./comments/comments.module";
import { LikedProductModule } from "./liked-product/liked-product.module";
import {
  ElasticsearchModule,
  ElasticsearchService,
} from "@nestjs/elasticsearch";
import { SearchModule } from "./search/search.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/products_service/.env",
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        PORT: Joi.number().required(),
        RABBIT_MQ_URI: Joi.string().required(),
      }),
    }),
    RmqModule.register({ name: "ORDER_SERVICE" }),
    CategoryModule,
    ProductModule,
    CommentsModule,
    LikedProductModule,
    SearchModule,
  ],
  controllers: [],
  providers: [PrismaService, RmqService],
})
export class ProductsServiceModule {}
