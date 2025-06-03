import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { CartService } from "../cart/cart.service";
import { PrismaService } from "prisma/prisma.service";
import {
  ORDER_SERVICE,
  PRODUCTS_SERVICE,
  PUNKT_SERVICE,
  STAFF_SERVICE,
} from "../constants/services";
import { CartModule } from "../cart/cart.module";
import { RmqModule } from "tezbuy_packages";

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
    RmqModule.register({
      name: STAFF_SERVICE,
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService, CartService, PrismaService],
})
export class OrderModule {}
