import { Module } from "@nestjs/common";
import { LikedProductService } from "./liked-product.service";
import { LikedProductController } from "./liked-product.controller";
import { PrismaService } from "prisma/prisma.service";

@Module({
  controllers: [LikedProductController],
  providers: [LikedProductService, PrismaService],
})
export class LikedProductModule {}
