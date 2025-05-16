import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { CartService } from "../cart/cart.service";
import { PrismaService } from "apps/order_service/prisma/prisma.service";
import { RmqModule } from "@app/common";
import {
  ORDER_SERVICE,
  PRODUCTS_SERVICE,
  PUNKT_SERVICE,
} from "../constants/services";
import { CartModule } from "../cart/cart.module";

const services = [];

@Module({
  imports: [
    RmqModule.register({
      name: ORDER_SERVICE,
    }),
    RmqModule.register({
      name: PUNKT_SERVICE,
    }),
    RmqModule.register({
      name: PRODUCTS_SERVICE,
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService, CartService, PrismaService],
})
export class OrderModule {}
