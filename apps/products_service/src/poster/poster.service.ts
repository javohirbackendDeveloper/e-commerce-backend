import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class PosterService {
  constructor(
    private readonly cloudinary: CloudinaryService,
    private prisma: PrismaService
  ) {}

  async create(title: string, img: Express.Multer.File) {
    try {
      const imgUrl = await this.cloudinary.uploadFile(img, "Poster");

      const poster = await this.prisma.poster.create({
        data: {
          img: imgUrl,
          title,
        },
      });
      return poster;
    } catch (err) {
      throw new HttpException(
        err.message,
        err.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll() {
    try {
      return this.prisma.poster.findMany();
    } catch (err) {
      throw new HttpException(
        err.message,
        err.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: string) {
    try {
      const poster = await this.prisma.poster.findUnique({ where: { id } });
      if (!poster) throw new NotFoundException("Poster not found");
      return poster;
    } catch (err) {
      throw new HttpException(
        err.message,
        err.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string) {
    try {
      const exist = await this.findOne(id);
      const deletedImage = await this.cloudinary.deleteImage(exist.img);

      return this.prisma.poster.delete({ where: { id } });
    } catch (err) {
      throw new HttpException(
        err.message,
        err.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
