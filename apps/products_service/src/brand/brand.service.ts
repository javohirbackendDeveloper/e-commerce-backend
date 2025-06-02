import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateBrandWithCategoryDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { CategoryService } from "../category/category.service";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import {
  BrandType,
  ReturnCreatedBrandCategory,
  ReturnFindAll,
} from "./dto/return.dto";
import { Brand } from "apps/products_service/generated/prisma";

@Injectable()
export class BrandService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly prismaService: PrismaService
  ) {}

  async createBrandWithCategory(
    dto: CreateBrandWithCategoryDto
  ): Promise<ReturnCreatedBrandCategory> {
    try {
      const { name, categoryId } = dto;

      const existBrand = await this.prismaService.brand.findUnique({
        where: { name },
      });

      if (existBrand) {
        throw new HttpException(
          "This brand name already exists",
          HttpStatus.BAD_REQUEST
        );
      }

      // 2. Brand yaratish
      const brand = await this.prismaService.brand.create({
        data: { name },
      });

      const createdRelations = await this.createBrandCategory(
        categoryId,
        brand as Brand
      );

      return {
        message: "Brand muvaffaqiyatli yaratildi",
        brand,
        createdRelations,
      };
    } catch (err) {
      console.log(err);

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

      const brands = await this.prismaService.brandCategory.findMany({
        where: {
          categoryId: { in: childrenCategories },
        },
        include: {
          brand: true,
        },
      });

      const uniqueBrands = [];
      for (const brand of brands) {
        const brandId = brand.brandId;

        const existBrand = uniqueBrands.find(
          (item) => item.brandId === brandId
        );

        if (!existBrand) {
          uniqueBrands.push(brand);
        }
      }
      return uniqueBrands;
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

  async findAll() {
    try {
      const brands = await this.prismaService.brand.findMany({
        include: {
          categories: {
            include: {
              category: true,
            },
          },
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

  async update(
    id: string,
    updateBrandDto: UpdateBrandDto
  ): Promise<ReturnCreatedBrandCategory> {
    try {
      const { name, categoryId } = updateBrandDto;
      const existBrand = await this.prismaService.brand.findUnique({
        where: { id },
      });

      if (!existBrand) {
        throw new HttpException(
          "This brand not found with this id " + id,
          HttpStatus.NOT_FOUND
        );
      }

      const brand = await this.prismaService.brand.update({
        where: { id },
        data: {
          name,
        },
      });
      await this.prismaService.brandCategory.deleteMany({
        where: {
          brandId: id,
        },
      });

      const createdRelations = await this.createBrandCategory(
        categoryId,
        brand as Brand
      );

      return {
        message: "Brand muvaffaqiyatli yangilanti",
        createdRelations,
        brand,
      };
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string): Promise<BrandType> {
    try {
      const brandCategory = await this.prismaService.brandCategory.deleteMany({
        where: { brandId: id },
      });

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

  async createBrandCategory(categoryId: string[], brand: Brand) {
    const createdRelations = [];

    for (const cat of categoryId) {
      const existRelation = await this.prismaService.brandCategory.findFirst({
        where: { brandId: brand.id, categoryId: cat },
      });

      if (!existRelation) {
        const relation = await this.prismaService.brandCategory.create({
          data: {
            brandId: brand.id,
            categoryId: cat,
          },
        });
        createdRelations.push(relation);
      }
    }

    return createdRelations;
  }
}
