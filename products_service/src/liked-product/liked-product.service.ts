import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateLikedProductDto } from "./dto/create-liked-product.dto";
import { PrismaService } from "prisma/prisma.service";
import { Request } from "express";

@Injectable()
export class LikedProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLikedProductDto: CreateLikedProductDto, req: Request) {
    const { productId } = createLikedProductDto;

    const userId = req.headers["x_user_id"];
    if (!userId) {
      throw new HttpException(
        "Please login again to save this product",
        HttpStatus.UNAUTHORIZED
      );
    }

    const existing = await this.prisma.likedProduct.findFirst({
      where: { userId: userId as string, productId },
    });

    if (existing) {
      return { message: "Siz allaqachon bu mahsulotni saqlagansiz" };
    }

    const isExistProduct = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!isExistProduct) {
      return { message: "Bu mahsulot topilmadi" };
    }

    // const isExistUser =
    if (!isExistProduct) {
      return { message: "Bu mahsulot topilmadi" };
    }

    return await this.prisma.likedProduct.create({
      data: { userId: userId as string, productId },
    });
  }

  async findAll(req: Request) {
    const userId = req.headers["x_user_id"];
    if (!userId) {
      throw new HttpException(
        "Please login again to save this product",
        HttpStatus.UNAUTHORIZED
      );
    }
    return await this.prisma.likedProduct.findMany({
      where: { userId: userId as string },
      orderBy: { createdAt: "desc" },
      include: {
        product: {
          include: {
            product_images: true,
          },
        },
      },
    });
  }

  async remove(id: string, req: Request) {
    const userId = req.headers["x_user_id"];
    if (!userId) {
      throw new HttpException(
        "Please login again to save this product",
        HttpStatus.UNAUTHORIZED
      );
    }
    const existing = await this.prisma.likedProduct.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException("Liked product not found");
    }

    const like = await this.prisma.likedProduct.delete({
      where: { id, userId: userId as string },
    });

    if (!like) {
      throw new HttpException(
        "You can delete only your saved products",
        HttpStatus.UNAUTHORIZED
      );
    }

    return { message: "Deleted successfully" };
  }
}
