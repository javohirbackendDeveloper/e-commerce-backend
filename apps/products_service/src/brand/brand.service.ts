import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { CategoryService } from "../category/category.service";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { Brand } from "@prisma/client";

@Injectable()
export class BrandService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly prismaService: PrismaService
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    try {
      const { categoryId, name } = createBrandDto;

      const category = await this.categoryService.findOne(categoryId as string);

      if (!category) {
        throw new HttpException(
          "This category not found",
          HttpStatus.NOT_FOUND
        );
      }

      if (category?.children) {
        throw new HttpException(
          "This category has inline children, please select it",
          HttpStatus.BAD_REQUEST
        );
      }

      const existBrandName = await this.prismaService.brand.findUnique({
        where: { name },
      });

      if (existBrandName) {
        throw new HttpException(
          "This brand name already exist",
          HttpStatus.BAD_REQUEST
        );
      }
      const brand = await this.prismaService.brand.create({
        data: {
          name,
          categoryId,
        },
      });

      return brand;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findByCategoryId(id: string) {
    try {
      const childrenCategories =
        await this.categoryService.getAllChildCategoryIds(id);

      const brands = await this.prismaService.brand.findMany({
        where: {
          categoryId: { in: childrenCategories },
        },
      });

      return brands;

      console.log({ childrenCategories });
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  findOne(id: number) {
    try {
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll(): Promise<Brand[]> {
    try {
      const brands = await this.prismaService.brand.findMany({
        include: {
          category: true,
        },
      });

      return brands;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    try {
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string) {
    try {
      const brand = await this.prismaService.brand.delete({
        where: { id },
      });

      return brand;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
