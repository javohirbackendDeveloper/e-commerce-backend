import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ProductsServiceService } from "./products-service.service";
import { Product } from "../generated/prisma";
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from "@nestjs/microservices";
import { RmqService } from "@app/common";

@Controller("product")
export class ProductsServiceController {
  constructor(
    private readonly productsServiceService: ProductsServiceService,
    private readonly rmqService: RmqService
  ) {}

  @MessagePattern("get_products_by_ids")
  async getProductByIds(
    @Payload() productIds: string[],
    @Ctx() ctx: RmqContext
  ) {
    this.rmqService.ack(ctx);
    return this.productsServiceService.getProductsByIds(productIds);
  }

  @Get()
  async getAllProducts() {
    return this.productsServiceService.getAllProducts();
  }

  @Get(":id")
  async getOneProduct(@Param("id") id: string) {
    return this.productsServiceService.getOneProduct(id);
  }

  @Post()
  async createProduct(@Body() data: Product) {
    return this.productsServiceService.createProduct(data);
  }

  @Put(":id")
  async updateProduct(@Param("id") id: string, @Body() data: Product) {
    return this.productsServiceService.updateProduct(id, data);
  }

  @Delete(":id")
  async deleteProduct(@Param("id") id: string) {
    return this.productsServiceService.deleteProduct(id);
  }
}
