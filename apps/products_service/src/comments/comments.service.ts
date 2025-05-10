import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { Request } from "express";

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto, req: Request) {
    const userId = req.headers["x_user_id"];
    if (!userId) {
      throw new HttpException(
        "Please login again to send a comment",
        HttpStatus.UNAUTHORIZED
      );
    }

    const comment = await this.prisma.comments.create({
      data: {
        ...createCommentDto,
        sent_person: userId as string,
      },
    });
    return comment;
  }

  async findAll() {
    return this.prisma.comments.findMany({
      orderBy: { createdAt: "desc" },
    });
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
}
