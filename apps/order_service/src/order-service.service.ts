import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateOrderDto } from "./dto/createOrder.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class OrderServiceService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject("ORDER_SERVICE") private readonly orderClient: ClientProxy
  ) {}

  async createOrder(orderDto: CreateOrderDto) {
    const { productIds, userId } = orderDto;

    const productOnlyIds = productIds.map((item) => item.productId);
    try {
      this.orderClient.emit("order_created", productOnlyIds);

      return { message: "Order created successfully" };

      // const order = await this.prismaService.orders.create({
      //   data: { ...orderDto, totalPrice },
      // });

      // await lastValueFrom(this.productClient.emit("order_created", { orderDto }));
    } catch (error) {
      throw new Error(error);
    }
  }
}
