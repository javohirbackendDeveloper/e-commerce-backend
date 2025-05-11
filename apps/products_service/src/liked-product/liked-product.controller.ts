import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from "@nestjs/common";
import { LikedProductService } from "./liked-product.service";
import { CreateLikedProductDto } from "./dto/create-liked-product.dto";
import { Request } from "express";

@Controller("liked-product")
export class LikedProductController {
  constructor(private readonly likedProductService: LikedProductService) {}

  @Post()
  create(
    @Req() req: Request,
    @Body() createLikedProductDto: CreateLikedProductDto
  ) {
    return this.likedProductService.create(createLikedProductDto, req);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.likedProductService.findAll(req);
  }

  @Delete(":id")
  remove(@Req() req: Request, @Param("id") id: string) {
    return this.likedProductService.remove(id, req);
  }
}
