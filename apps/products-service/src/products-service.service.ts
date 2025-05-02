import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  BadRequestException,
  ConflictException,
  Inject,
} from "@nestjs/common";
import { Product } from "../generated/prisma";
import { ProductPrismaService } from "../prisma/prisma.service";
import { ReturnMessage } from "./interface/return.interface";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class ProductsServiceService {
  constructor(
    private readonly productPrismaService: ProductPrismaService,
    @Inject("ORDER-SERVICE") private orderClient: ClientProxy
  ) {}

  async getAllProducts(): Promise<Product[]> {
    try {
      const products = await this.productPrismaService.product.findMany();
      return products;
    } catch (error) {
      throw new InternalServerErrorException("Failed to fetch products");
    }
  }

  async getOneProduct(id: string): Promise<Product> {
    try {
      const product = await this.productPrismaService.product.findUnique({
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

  async createProduct(data: Product): Promise<Product> {
    
    try {
      return await this.productPrismaService.product.create({ data });
    } catch (error) {
      throw new BadRequestException("Invalid product data");
    }
  }

  async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
    try {
      return await this.productPrismaService.product.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      throw new BadRequestException("Invalid update data");
    }
  }

  async deleteProduct(id: string): Promise<ReturnMessage> {
    try {
      await this.productPrismaService.product.delete({ where: { id } });
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
}
