import { Module } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { PrismaService } from "apps/products_service/prisma/prisma.service";

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService],
})
export class CommentsModule {}
