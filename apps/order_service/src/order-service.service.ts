import { Inject, Injectable } from "@nestjs/common";
import { PRODUCTS_SERVICE } from "./constants/services";
import { ClientProxy } from "@nestjs/microservices";
import { CreateOrderDto } from "./dto/createOrder.dto";
import { lastValueFrom, timeout } from "rxjs";
import { PrismaService } from "../prisma/prisma.service";
import { Product } from "apps/products_service/generated/prisma";

@Injectable()
export class OrderServiceService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(PRODUCTS_SERVICE) private productClient: ClientProxy
  ) {}

  async createOrder(orderDto: CreateOrderDto) {
    const { productIds, userId } = orderDto;

    const productOnlyIds = productIds.map((item) => item.productId);
    try {
      console.log({ productOnlyIds });

      const products = await lastValueFrom(
        this.productClient.send<Product[]>(
          "get_products_by_ids",
          productOnlyIds
        )
      );
      return products;

      // const order = await this.prismaService.orders.create({
      //   data: { ...orderDto, totalPrice },
      // });

      // await lastValueFrom(this.productClient.emit("order_created", { orderDto }));
    } catch (error) {
      throw new Error(error);
    }
  }
}
