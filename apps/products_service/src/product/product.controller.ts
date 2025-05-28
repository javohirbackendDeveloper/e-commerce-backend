import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiConsumes,
} from "@nestjs/swagger";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";

@ApiTags("products_service/product")
@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("createImages")
  @UseInterceptors(FilesInterceptor("product_images", 5))
  @ApiOperation({ summary: "Create a new product" })
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({ status: 201, description: "Product created successfully" })
  createImages(@UploadedFiles() product_images: Express.Multer.File[]) {
    return this.productService.createImage(product_images);
  }

  @Post()
  @ApiOperation({ summary: "Create a new product" })
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({ status: 201, description: "Product created successfully" })
  create(
    @Body()
    createProductDto: CreateProductDto
  ) {
    console.log("Request came to create product api", createProductDto);

    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({ status: 200, description: "List of products" })
  findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a product by ID" })
  @ApiParam({ name: "id", description: "Product ID" })
  @ApiResponse({ status: 200, description: "Product details" })
  findOne(@Param("id") id: string) {
    return this.productService.findOne(id);
  }

  @Get("/getProductByCategory/:categoryId")
  @ApiOperation({ summary: "Get products by category ID" })
  @ApiParam({ name: "categoryId", description: "Category ID" })
  @ApiResponse({ status: 200, description: "Products of category" })
  getAllProductsByCategory(@Param("categoryId") categoryId: string) {
    return this.productService.getAllProductsByCategory(categoryId);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a product by ID" })
  @ApiParam({ name: "id", description: "Product ID" })
  @ApiBody({ type: UpdateProductDto })
  @ApiResponse({ status: 200, description: "Product updated successfully" })
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a product by ID" })
  @ApiParam({ name: "id", description: "Product ID" })
  @ApiResponse({ status: 200, description: "Product deleted successfully" })
  remove(@Param("id") id: string) {
    return this.productService.remove(id);
  }

  @Delete("image/:id")
  @ApiOperation({ summary: "Delete a product image by id" })
  @ApiParam({ name: "id", description: "Product image ID" })
  @ApiResponse({
    status: 200,
    description: "Product image deleted successfully",
  })
  deleteProductImage(@Param("id") id: string) {
    return this.productService.deleteOneImage(id);
  }

  @Post("uploadImage")
  @UseInterceptors(FileInterceptor("product_images"))
  @ApiOperation({ summary: "Upload image for product" })
  @ApiParam({ name: "id", description: "Product image url" })
  @ApiResponse({
    status: 200,
    description: "Product image uploaded successfully",
  })
  uploadOneImage(
    @UploadedFile() file: Express.Multer.File,
    @Body("productId") productId: string
  ) {
    console.log({ file, productId });

    return this.productService.uploadOneImage(file, productId);
  }

  // APIS WITH RABBITMQ

  @MessagePattern("get_products")
  async getProductByIds(@Payload() productIds: string[]) {
    console.log("Message came ", productIds);
    return this.productService.getProductsByIds(productIds);
  }

  @MessagePattern("get_cart_product")
  async getOneProductById(@Payload() productId: string) {
    return this.productService.findOne(productId);
  }
}
