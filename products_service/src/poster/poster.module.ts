import { Module } from "@nestjs/common";
import { PosterService } from "./poster.service";
import { PosterController } from "./poster.controller";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { PrismaService } from "prisma/prisma.service";

@Module({
  controllers: [PosterController],
  providers: [PosterService, PrismaService, CloudinaryService],
})
export class PosterModule {}
