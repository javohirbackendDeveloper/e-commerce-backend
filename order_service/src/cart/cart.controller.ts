import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  Res,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Request, Response } from "express";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiCookieAuth,
} from "@nestjs/swagger";

@ApiTags("Cart")
@ApiCookieAuth()
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({ summary: "Add item to cart" })
  @ApiBody({ type: CreateCartDto })
  @ApiResponse({ status: 201, description: "Product added to cart" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  create(@Req() req: Request, @Body() dto: CreateCartDto) {
    return this.cartService.create(dto, req);
  }

  @Get("getPriceQuantity")
  @ApiOperation({ summary: "Get total price and quantity in cart" })
  @ApiResponse({ status: 200, description: "Cart summary retrieved" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  getPriceQuantity(@Req() req: Request) {
    return this.cartService.getPriceQuantity(req);
  }

  @Get()
  @ApiOperation({ summary: "Get all cart items" })
  @ApiResponse({ status: 200, description: "Cart items retrieved" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  findAll(@Req() req: Request) {
    return this.cartService.findAll(req);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a cart item" })
  @ApiParam({ name: "id", description: "Cart item ID" })
  @ApiBody({ type: UpdateCartDto })
  @ApiResponse({ status: 200, description: "Cart item updated" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Item not found" })
  update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() dto: UpdateCartDto
  ) {
    return this.cartService.update(id, dto, req);
  }

  @Delete("removeAll")
  @ApiOperation({ summary: "Delete a cart items" })
  @ApiParam({ name: "id", description: "Cart items ID" })
  @ApiResponse({ status: 200, description: "Cart items removed" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Item not found" })
  removeAll(@Req() req: Request) {
    return this.cartService.removeAll(req);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a cart item" })
  @ApiParam({ name: "id", description: "Cart item ID" })
  @ApiResponse({ status: 200, description: "Cart item removed" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Item not found" })
  remove(@Req() req: Request, @Param("id") id: string) {
    return this.cartService.remove(id, req);
  }

  @Post("create-checkout-session")
  @ApiOperation({ summary: "Create Stripe checkout session" })
  @ApiResponse({ status: 200, description: "Checkout session created" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  payment(@Req() req: Request, @Res() res: Response) {
    return this.cartService.payment(req, res);
  }
}
