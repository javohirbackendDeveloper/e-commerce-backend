import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Request, Response } from "express";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { ReturnTotals } from "./dto/return.dto";
import Stripe from "stripe";
import { PrismaService } from "prisma/prisma.service";
import { CartItem } from "@prisma/client";
import { PaymentDto } from "./dto/payment.dto";

const stripe = new Stripe(
  "sk_test_51Qg7BF097qSAwIsLIEx7f8HuBZdPToxhyOVQhRlw4MnAdBz3HJrpbzR8dDN93f6vgDWVdeSTHB4hChI5urFDqIeH00FbktL9xS"
);
// const stripe = new Stripe(process.env.STRIPE_SECRET);
@Injectable()
export class CartService {
  constructor(
    private readonly prismService: PrismaService,
    @Inject("ORDER_SERVICE") private readonly orderClient: ClientProxy,
    @Inject("PRODUCTS_SERVICE") private readonly productClient: ClientProxy
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
        this.productClient.send("get_cart_product", productId)
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
        const cart = await this.prismService.cartItem.update({
          where: { id: existCartItem.id },
          data: {
            quantity: {
              increment: quantity,
            },
          },
        });

        return cart;
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
  async getPriceQuantity(req: Request): Promise<ReturnTotals> {
    try {
      const userId = req.headers["x_user_id"];

      const cartItems = await this.prismService.cartItem.findMany({
        where: {
          userId: userId as string,
        },
      });

      let totalPrice = 0;
      const totalQuantity = cartItems.length;

      for (const cartProduct of cartItems) {
        const product = await firstValueFrom(
          this.productClient.send("get_cart_product", cartProduct.productId)
        );

        if (product && product.quantity >= cartProduct.quantity) {
          totalPrice += Number(product.price * cartProduct.quantity);
        }
      }

      return {
        totalPrice,
        totalQuantity,
      };
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

      const { quantity } = updateCartDto;

      if (!userId) {
        throw new HttpException(
          "Please login again to continue",
          HttpStatus.UNAUTHORIZED
        );
      }

      const cartitem = await this.prismService.cartItem.findFirst({
        where: { userId: userId as string, productId: id },
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
        this.productClient.send("get_cart_product", cartitem.productId)
      );

      if (product.quantity < quantity) {
        throw new HttpException(
          `There are only ${product.quantity} item from this product in warehouse`,
          HttpStatus.NOT_FOUND
        );
      }

      const exist = await this.prismService.cartItem.findUnique({
        where: { id: cartitem.id },
      });
      console.log({ exist });

      const cartItem = await this.prismService.cartItem.update({
        where: { id: cartitem.id },
        data: {
          quantity: {
            increment: quantity,
          },
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

      if (!cartitem) {
        throw new HttpException(
          "This cart item not found with this id " + id,
          HttpStatus.NOT_FOUND
        );
      }

      if (cartitem?.userId !== userId) {
        throw new HttpException(
          "You cannot delete cart item of other people",
          HttpStatus.UNAUTHORIZED
        );
      }

      return this.prismService.cartItem.delete({
        where: { id },
      });
    } catch (err) {
      console.log({ err });

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

      if (!cartItems) {
        return { cartItemsWithProduct: [], grandPrice: [] };
      }
      const cartProductIds = cartItems.map((cart) => cart.productId);

      let allProducts = [];

      if (cartProductIds.length > 0) {
        allProducts = await firstValueFrom(
          this.productClient.send("get_products", cartProductIds)
        );
      } else {
        return { cartItemsWithProduct: [], grandPrice: [] };
      }

      const productIndexMap = new Map(
        allProducts.map((product) => [product.id, product])
      );

      const cartItemsWithProduct = cartItems.map((item) => {
        const product = productIndexMap.get(item.productId);

        const total = product ? item.quantity * product.price : 0;

        return {
          ...item,
          purchasedQuantity: item.quantity || 1,
          ...product,
          cartId: item.id,
          total,
        };
      });

      const grandPrice = cartItemsWithProduct.reduce(
        (acc, item) => acc + (item.total || 0),
        0
      );

      return { cartItemsWithProduct, grandPrice };
    } catch (err) {
      console.log(err);

      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async removeAll(req: Request) {
    try {
      const userId = req.headers["x_user_id"];

      const allCartProducts = await this.findAll(req);

      const updatedProducts = allCartProducts.cartItemsWithProduct.map(
        (product) => {
          return {
            productId: product.productId,
            quantity: product.purchasedQuantity,
          };
        }
      );

      // const res = await firstValueFrom(
      //   this.productClient.send("reduce_quantity", updatedProducts)
      // );

      const deletedCartItems = await this.prismService.cartItem.deleteMany({
        where: {
          userId: userId as string,
        },
      });

      return deletedCartItems;
    } catch (err) {
      console.log({ err });

      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // payment

  async payment(paymentDto: PaymentDto, req: Request, res: Response) {
    try {
      const { totalPrice } = paymentDto;

      console.log({ totalPrice });

      const userId = req.headers["x_user_id"];
      const products = await this.findAll(req);

      const lineItems = products.cartItemsWithProduct.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.product_name,
            images: [product.product_images[0]?.imageUrl],
          },
          unit_amount: Math.round((totalPrice / 12500) * 100),
        },
        quantity: product.purchasedQuantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });

      res.json({ id: session.id });
    } catch (err) {
      console.log({ err });

      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
