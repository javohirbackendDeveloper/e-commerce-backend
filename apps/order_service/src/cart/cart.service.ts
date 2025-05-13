import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Request } from "express";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { PrismaService } from "apps/order_service/prisma/prisma.service";
import { CartItem } from "apps/order_service/generated/prisma";

@Injectable()
export class CartService {
  constructor(
    private readonly prismService: PrismaService,
    @Inject("ORDER_SERVICE") private readonly orderClient: ClientProxy
  ) {}

  async create(createCartItemDto: CreateCartDto, req: Request) {
    try {
      const userId = req.headers["x_user_id"];

      if (!userId) {
        throw new HttpException(
          "Please login again to continue",
          HttpStatus.UNAUTHORIZED
        );
      }

      const { productId, quantity } = createCartItemDto;

      const product = await firstValueFrom(
        this.orderClient.send("get_cart_product", productId)
      );

      if (!product) {
        throw new HttpException(
          "This product not found with this id " + productId,
          HttpStatus.NOT_FOUND
        );
      }

      if (!product.quantity || product.quantity < quantity) {
        throw new HttpException(
          `There are only ${product.quantity} item from this product in warehouse`,
          HttpStatus.NOT_FOUND
        );
      }

      const existCartItem = await this.prismService.cartItem.findFirst({
        where: { productId, userId: userId as string },
      });

      if (existCartItem) {
        throw new HttpException(
          "This product already exist in your cart",
          HttpStatus.BAD_REQUEST
        );
      }

      const cartItem = await this.prismService.cartItem.create({
        data: {
          productId,
          quantity,
          userId: userId as string,
        },
      });

      return cartItem;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll(req: Request) {
    try {
      const userId = req.headers["x_user_id"];

      if (!userId) {
        throw new HttpException(
          "Please login again to continue",
          HttpStatus.UNAUTHORIZED
        );
      }

      const cartItems = await this.prismService.cartItem.findMany({
        where: { userId: userId as string },
      });

      const cartProductIds = cartItems.map((cart) => cart.productId);

      let allProducts = [];
      if (cartProductIds.length > 0) {
        allProducts = await firstValueFrom(
          this.orderClient.send("get_products", cartProductIds)
        );
      }

      const productIndexMap = new Map(
        allProducts.map((product) => [product.id, product])
      );

      const cartItemsWithProduct = cartItems.map((item) => {
        const product = productIndexMap.get(item.productId);

        const total = product ? item.quantity * product.price : 0;

        return {
          ...item,
          ...product,
          total,
        };
      });

      const grandPrice = cartItemsWithProduct.reduce(
        (acc, item) => acc + (item.total || 0),
        0
      );

      return [...cartItemsWithProduct, { grandPrice }];
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(
    id: string,
    updateCartDto: UpdateCartDto,
    req: Request
  ): Promise<CartItem> {
    try {
      const userId = req.headers["x_user_id"];

      if (!userId) {
        throw new HttpException(
          "Please login again to continue",
          HttpStatus.UNAUTHORIZED
        );
      }

      const cartitem = await this.prismService.cartItem.findUnique({
        where: { id },
      });

      if (!cartitem) {
        throw new HttpException(
          "This cartItem not found with this id " + id,
          HttpStatus.NOT_FOUND
        );
      }

      if (cartitem?.userId !== userId) {
        throw new HttpException(
          "You cannot update cart item of other people",
          HttpStatus.UNAUTHORIZED
        );
      }

      const product = await firstValueFrom(
        this.orderClient.send("get_cart_product", cartitem.productId)
      );

      if (product.quantity < updateCartDto.quantity) {
        throw new HttpException(
          `There are only ${product.quantity} item from this product in warehouse`,
          HttpStatus.NOT_FOUND
        );
      }
      const cartItem = await this.prismService.cartItem.update({
        where: { id },
        data: {
          ...updateCartDto,
        },
      });
      return cartItem;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string, req: Request) {
    try {
      const userId = req.headers["x_user_id"];

      const cartitem = await this.prismService.cartItem.findUnique({
        where: { id },
      });

      if (cartitem.userId !== userId) {
        throw new HttpException(
          "You cannot delete cart item of other people",
          HttpStatus.UNAUTHORIZED
        );
      }

      return this.prismService.cartItem.delete({
        where: { id },
      });
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
