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
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Request } from "express";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Req() req: Request, @Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto, req);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.cartService.findAll(req);
  }

  @Patch(":id")
  update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() updateCartDto: UpdateCartDto
  ) {
    return this.cartService.update(id, updateCartDto, req);
  }

  @Delete(":id")
  remove(@Req() req: Request, @Param("id") id: string) {
    return this.cartService.remove(id, req);
  }
}
