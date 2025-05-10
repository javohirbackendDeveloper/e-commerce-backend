import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { RmqModule, RmqService } from "@app/common";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { PrismaService } from "../prisma/prisma.service";
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/products_service/.env",
      isGlobal: true,
    }),
    RmqModule.register({ name: "ORDER_SERVICE" }),
    CategoryModule,
    ProductModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [PrismaService, RmqService],
})
export class ProductsServiceModule {}
