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
  ApiBody,
  ApiParam,
  ApiBearerAuth,
  ApiHeader,
  ApiCookieAuth,
} from "@nestjs/swagger";

@ApiTags("order_service/cart")
@ApiCookieAuth()
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({
    summary: "Add item to cart",
    description: "Adds a new product to the user's cart",
  })
  @ApiResponse({
    status: 201,
    description: "Product successfully added to cart",
  })
  @ApiResponse({ status: 400, description: "Bad request - invalid input data" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized - authentication required",
  })
  create(@Req() req: Request, @Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto, req);
  }

  @Get("getPriceQuantity")
  @ApiResponse({
    status: 401,
    description: "Unauthorized - authentication required",
  })
  getPriceQuantity(@Req() req: Request) {
    return this.cartService.getPriceQuantity(req);
  }

  @Get()
  @ApiOperation({
    summary: "Get cart items",
    description: "Retrieves all items in the user's cart",
  })
  @ApiResponse({
    status: 200,
    description: "Cart items retrieved successfully",
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized - authentication required",
  })
  findAll(@Req() req: Request) {
    return this.cartService.findAll(req);
  }

  @Patch(":id")
  @ApiOperation({
    summary: "Update cart item",
    description: "Updates the quantity of a specific item in the cart",
  })
  @ApiParam({
    name: "id",
    description: "ID of the cart item to update",
    example: "60d5ecb8f8b7a12f8c8f7f51",
  })
  @ApiBody({
    type: UpdateCartDto,
  })
  @ApiResponse({ status: 200, description: "Cart item updated successfully" })
  @ApiResponse({ status: 400, description: "Bad request - invalid input data" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized - authentication required",
  })
  @ApiResponse({ status: 404, description: "Cart item not found" })
  update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() updateCartDto: UpdateCartDto
  ) {
    return this.cartService.update(id, updateCartDto, req);
  }

  @Delete(":id")
  @ApiOperation({
    summary: "Remove item from cart",
    description: "Removes a specific item from the cart",
  })
  @ApiParam({
    name: "id",
    description: "ID of the cart item to remove",
    example: "60d5ecb8f8b7a12f8c8f7f51",
  })
  @ApiResponse({ status: 200, description: "Cart item removed successfully" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized - authentication required",
  })
  @ApiResponse({ status: 404, description: "Cart item not found" })
  remove(@Req() req: Request, @Param("id") id: string) {
    return this.cartService.remove(id, req);
  }

  // stripe service for now

  @Post("create-checkout-session")
  @ApiOperation({
    summary: "Pay for products to order",
    description: "Paying for products",
  })
  @ApiResponse({ status: 200, description: "Payment successfully added" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized - authentication required",
  })
  payment(@Req() req: Request, @Res() res: Response) {
    return this.cartService.payment(req, res);
  }
}
