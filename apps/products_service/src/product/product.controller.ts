import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(id);
  }

  @Get("/getProductByCategory/:categoryId")
  getAllProductsByCategory(@Param("categoryId") categoryId: string) {
    return this.productService.getAllProductsByCategory(categoryId);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productService.remove(id);
  }

  // APIS WITH RABBITMQ

  @MessagePattern("get_products")
  async getProductByIds(@Payload() productIds: string[]) {
    console.log(
      "Message received from order service in get_products",
      productIds
    );

    return this.productService.getProductsByIds(productIds);
  }

  @MessagePattern("get_cart_product")
  async getOneProductById(@Payload() productId: string) {
    console.log("Message received from order service  in get_cart_product", {
      productId,
    });
    return this.productService.findOne(productId);
  }
}
