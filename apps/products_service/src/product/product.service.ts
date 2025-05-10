import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { Product } from "apps/products_service/generated/prisma";
import { ReturnData } from "./interface";

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createProductDto: CreateProductDto
  ): Promise<Product | ReturnData> {
    try {
      const { categoryId } = createProductDto;
      const category = await this.prismaService.category.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        throw new HttpException(
          "This category not found with this id " + categoryId,
          HttpStatus.NOT_FOUND
        );
      } else if (category.children > 0) {
        return { message: "Iltimos kategoriyani oxirigacha tanlang" };
      }

      const product = await this.prismaService.product.create({
        data: createProductDto,
      });
      return product;
    } catch (error) {
      throw new BadRequestException("Invalid product data");
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.prismaService.product.findMany({
        orderBy: {
          createdAt: "desc",
        },
        include: {
          category: true,
          comments: true,
        },
      });

      return products;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException("Failed to fetch products");
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.prismaService.product.findUnique({
        where: { id },
      });

      if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }

      return product;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to fetch product");
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const { categoryId } = updateProductDto;

      const category = await this.prismaService.category.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        throw new HttpException(
          "This category not found with this id " + categoryId,
          HttpStatus.NOT_FOUND
        );
      }

      return await this.prismaService.product.update({
        where: { id },
        data: updateProductDto,
      });
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      throw new BadRequestException("Invalid update data");
    }
  }

  async remove(id: string) {
    try {
      await this.prismaService.product.delete({ where: { id } });
      return {
        message: `Product with id ${id} deleted successfully`,
        success: true,
      };
    } catch (error) {
      if (error.code === "P2025") {
        return {
          message: `Product with id ${id} not found`,
          success: false,
        };
      }
      throw new InternalServerErrorException("Failed to delete product");
    }
  }

  async getProductsByIds(productIds: string[]) {
    const products = await this.prismaService.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });
    console.log({ products });
  }
}
