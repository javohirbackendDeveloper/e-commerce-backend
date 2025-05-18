import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Query,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import {
  UpdateOrderDto,
  UpdateOrderDtoForPunktAdmin,
} from "./dto/update-order.dto";
import { Request } from "express";
import { FilterOrdersDto } from "./dto/filterOrders.dto";
import { Prisma } from "apps/order_service/generated/prisma";

@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // USER APIS
  @Post("user")
  create(@Req() req: Request, @Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto, req);
  }

  @Get("user")
  getUserOrders(
    @Query() filterQueries: Prisma.OrdersWhereInput,
    @Req() req: Request
  ) {
    return this.orderService.getUserOrders(filterQueries, req);
  }

  @Patch("user/:id")
  update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() updateOrderDto: UpdateOrderDto
  ) {
    return this.orderService.update(id, updateOrderDto, req);
  }

  // PUNKT APIS

  @Get("punkt")
  findPunktOrders(
    @Query() filterQueries: Prisma.OrdersWhereInput,
    @Req() req: Request
  ) {
    return this.orderService.getPunktOrders(filterQueries, req);
  }

  @Patch("punkt/:id")
  updateForPunktAdmin(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() updateOrderDto: UpdateOrderDtoForPunktAdmin
  ) {
    return this.orderService.updatOrdersForPunktAdmin(id, updateOrderDto, req);
  }

  // APIS FOR ADMINS

  @Get("admin")
  getAllOrders(
    @Query() filterQueries: Prisma.OrdersWhereInput,
    @Req() req: Request
  ) {
    return this.orderService.getAllOrders(filterQueries);
  }
}
