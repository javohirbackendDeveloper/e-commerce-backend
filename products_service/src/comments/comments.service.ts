import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { PrismaService } from "prisma/prisma.service";
import { Request } from "express";
import { firstValueFrom } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";

@Injectable()
export class CommentsService {
  constructor(
    @Inject("ORDER_SERVICE") private readonly orderClient: ClientProxy,
    private readonly prisma: PrismaService,
    private readonly cloudinary: CloudinaryService
  ) {}

  async create(
    createCommentDto: CreateCommentDto,
    file: Express.Multer.File,
    req: Request
  ) {
    const userId = req.headers["x_user_id"];
    if (!userId) {
      throw new HttpException(
        "Please login again to send a comment",
        HttpStatus.UNAUTHORIZED
      );
    }

    let imageUrl: string | null = null;
    if (file) {
      imageUrl = await this.cloudinary.uploadFile(file, "Comments");
    }
    const comment = await this.prisma.comments.create({
      data: {
        ...createCommentDto,
        sent_person: userId as string,
        image: imageUrl ? imageUrl : "",
      },
    });
    return comment;
  }

  async findAll(req: Request) {
    try {
      const userId = req.headers["x_user_id"];
      if (!userId) {
        throw new HttpException(
          "Please login again to send a comment",
          HttpStatus.UNAUTHORIZED
        );
      }

      const userComments = await this.prisma.comments.findMany({
        where: {
          sent_person: userId as string,
        },
      });

      return userComments;
    } catch (err) {
      throw new HttpException(
        err.message || "internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: string) {
    const comment = await this.prisma.comments.findUnique({
      where: { id },
    });

    if (!comment) throw new NotFoundException("Comment not found");
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto, req: Request) {
    const comment = await this.prisma.comments.findUnique({
      where: { id },
    });
    const userId = req.headers["x_user_id"];
    const userRole = req.headers["x_user_role"];

    if (!userId) {
      throw new HttpException(
        "Please login again to send a comment",
        HttpStatus.UNAUTHORIZED
      );
    }

    if (userRole !== "Admin") {
      if (userId !== comment.sent_person) {
        return { message: "Bu kamentariyani siz yangilay olmaysiz" };
      }
      const updated = await this.prisma.comments.update({
        where: { id },
        data: {
          ...updateCommentDto,
          updatedAt: new Date(),
        },
      });
    }
    const updated = await this.prisma.comments.update({
      where: { id },
      data: {
        ...updateCommentDto,
        updatedAt: new Date(),
      },
    });

    return updated;
  }

  async remove(id: string, req: Request) {
    try {
      const comment = await this.prisma.comments.findUnique({
        where: { id },
      });
      const userId = req.headers["x_user_id"];
      const userRole = req.headers["x_user_role"];

      if (!userId) {
        throw new HttpException(
          "Please login again to send a comment",
          HttpStatus.UNAUTHORIZED
        );
      }

      if (userRole !== "Admin") {
        if (userId !== comment.sent_person) {
          return { message: "Bu kamentariyani siz o'chira olmaysiz" };
        }
        return await this.prisma.comments.delete({
          where: { id },
        });
      }
      return this.prisma.comments.delete({
        where: { id },
      });
    } catch (err) {
      throw new HttpException(
        err.message || "internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getPendingComments(req: Request) {
    try {
      const userId = req.headers["x_user_id"];

      if (!userId) {
        throw new HttpException(
          "Please login again to get pending comments",
          HttpStatus.UNAUTHORIZED
        );
      }

      const orderedProductIds = await firstValueFrom(
        this.orderClient.send("get_ordered_products", userId)
      );

      const onlyIds = orderedProductIds.flatMap((orderItem) => {
        return orderItem.orderItems.map((data) => data.productId);
      });

      const comments = await this.prisma.comments.findMany({
        where: {
          sent_person: userId as string,
        },
      });
      const onlyCommentIds = comments.map((comment) => {
        return comment.productId;
      });

      const notCommentedProductIds = [];
      onlyIds.forEach((id) => {
        if (!onlyCommentIds.includes(id)) {
          notCommentedProductIds.push(id);
        }
      });

      const products = await this.prisma.product.findMany({
        where: {
          id: {
            in: notCommentedProductIds,
          },
        },
        include: {
          product_images: true,
        },
      });

      return products;
    } catch (err) {
      throw new HttpException(
        err.message || "internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
