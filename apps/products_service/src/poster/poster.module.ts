import { Module } from "@nestjs/common";
import { PosterService } from "./poster.service";
import { PosterController } from "./poster.controller";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Module({
  controllers: [PosterController],
  providers: [PosterService, PrismaService, CloudinaryService],
})
export class PosterModule {}
