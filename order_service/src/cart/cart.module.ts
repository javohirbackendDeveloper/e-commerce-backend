import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { ORDER_SERVICE, PRODUCTS_SERVICE } from "../constants/services";
import { RmqModule } from "tezbuy_packages";
import { PrismaService } from "prisma/prisma.service";

@Module({
  imports: [
    RmqModule.register({
      name: ORDER_SERVICE,
    }),
    RmqModule.register({
      name: PRODUCTS_SERVICE,
    }),
  ],
  controllers: [CartController],
  providers: [CartService, PrismaService],
  exports: [CartService],
})
export class CartModule {}
