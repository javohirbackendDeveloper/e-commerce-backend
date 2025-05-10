import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "apps/products_service/prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createCategoryDto: CreateCategoryDto
  ): Promise<CreateCategoryDto> {
    try {
      const { parentId, title } = createCategoryDto;

      if (parentId) {
        const parentCategory = await this.prismaService.category.findUnique({
          where: { id: parentId },
        });

        if (!parentCategory) {
          throw new HttpException(
            "This parent category not found with this id " + parentId,
            HttpStatus.NOT_FOUND
          );
        }

        await this.prismaService.category.update({
          where: { id: parentId },
          data: {
            children: parentCategory.children + 1,
          },
        });
      }

      const existTitle = await this.prismaService.category.findUnique({
        where: { title },
      });

      if (existTitle) {
        throw new HttpException(
          "This  category title already exist",
          HttpStatus.BAD_REQUEST
        );
      }

      const category = await this.prismaService.category.create({
        data: {
          title,
          parentId: parentId || "",
        },
      });

      return category;
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  async findAll(): Promise<CreateCategoryDto[]> {
    try {
      const categories = await this.prismaService.category.findMany({
        where: { parentId: "" },
      });

      return categories;
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  async findOne(id: string): Promise<CreateCategoryDto[]> {
    try {
      const categories = await this.prismaService.category.findMany({
        where: { parentId: id },
      });

      return categories;
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto
  ): Promise<CreateCategoryDto> {
    const { title } = updateCategoryDto;
    try {
      const category = await this.prismaService.category.update({
        where: { id },
        data: { title },
      });
      return category;
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  // recursive delete function
  async remove(id: string) {
    try {
      const categories = await this.prismaService.category.findMany({
        where: { parentId: id },
      });
      for (const category of categories) {
        await this.remove(category.id);
      }

      await this.prismaService.category.delete({
        where: { id },
      });
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }
}
