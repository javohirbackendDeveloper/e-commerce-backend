import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as Joi from "joi";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { PrismaService } from "../prisma/prisma.service";
import { CommentsModule } from "./comments/comments.module";
import { LikedProductModule } from "./liked-product/liked-product.module";
import { SearchModule } from "./search/search.module";
import { CloudinaryModule } from "./cloudinary/cloudinary.module";
import { BrandModule } from "./brand/brand.module";
import { RmqModule, RmqService } from "tezbuy_packages";
import { FiltersModule } from "./filters/filters.module";
import { CouponsModule } from "./coupons/coupons.module";
import { PosterModule } from "./poster/poster.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { CacheModule } from "@nestjs/cache-manager";
import * as redisStore from "cache-manager-ioredis-yet";

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
    CacheModule.register({
      isGlobal: true,
      nonBlocking: true,
      refreshThreshold: 5,
      store: redisStore,
      url: "rediss://default:36324d3c8f944be898442b5fb132a650@gusc1-careful-oriole-30679.upstash.io:30679",
      ttl: 60,
    }),
    CategoryModule,
    ProductModule,
    CommentsModule,
    LikedProductModule,
    SearchModule,
    CloudinaryModule,
    BrandModule,
    FiltersModule,
    CouponsModule,
    PosterModule,
    DashboardModule,
  ],
  controllers: [],
  providers: [PrismaService, RmqService],
})
export class ProductsServiceModule {}
