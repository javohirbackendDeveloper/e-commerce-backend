import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Req,
} from "@nestjs/common";
import { LikedProductService } from "./liked-product.service";
import { CreateLikedProductDto } from "./dto/create-liked-product.dto";
import { Request } from "express";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from "@nestjs/swagger";

@ApiTags("products_service/liked-products")
@Controller("liked-product")
export class LikedProductController {
  constructor(private readonly likedProductService: LikedProductService) {}

  @Post()
  @ApiOperation({ summary: "Add a liked product for the current user" })
  @ApiBody({ type: CreateLikedProductDto })
  @ApiResponse({ status: 201, description: "Product liked successfully." })
  create(
    @Req() req: Request,
    @Body() createLikedProductDto: CreateLikedProductDto
  ) {
    return this.likedProductService.create(createLikedProductDto, req);
  }

  @Get()
  @ApiOperation({ summary: "Get all liked products for the current user" })
  @ApiResponse({ status: 200, description: "List of liked products returned." })
  findAll(@Req() req: Request) {
    return this.likedProductService.findAll(req);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remove a liked product by its ID" })
  @ApiParam({ name: "id", description: "ID of the liked product to remove" })
  @ApiResponse({ status: 200, description: "Product removed from liked list." })
  remove(@Req() req: Request, @Param("id") id: string) {
    return this.likedProductService.remove(id, req);
  }
}
