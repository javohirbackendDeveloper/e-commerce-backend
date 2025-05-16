import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Request } from "express";

@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // USER APIS
  @Post("user")
  create(@Req() req: Request, @Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto, req);
  }

  @Get("user")
  getUserOrders(@Req() req: Request) {
    return this.orderService.getUserOrders(req);
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
  getPunktOrders(@Req() req: Request) {
    return this.orderService.getUserOrders(req);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {}
}
