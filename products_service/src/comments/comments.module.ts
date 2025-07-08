import { Module } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { PrismaService } from "prisma/prisma.service";
import { RmqModule, RmqService } from "tezbuy_packages";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";

@Module({
  imports: [RmqModule.register({ name: "ORDER_SERVICE" })],
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService, CloudinaryService],
})
export class CommentsModule {}
