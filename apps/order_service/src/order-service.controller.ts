import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { OrderServiceService } from "./order-service.service";
import { CreateOrderDto } from "./dto/createOrder.dto";

@Controller("order")
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    console.log("Data came to order controller ", createOrderDto);

    return this.orderServiceService.createOrder(createOrderDto);
  }
}
