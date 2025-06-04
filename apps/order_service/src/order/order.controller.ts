import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Req,
  Query,
  Res,
} from "@nestjs/common";
import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import {
  UpdateOrderDto,
  UpdateOrderDtoForPunktAdmin,
} from "./dto/update-order.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { GetOrdersByMonth, GetOrdersByYear } from "./dto/getOrderByDate.dto";

@ApiTags("Buyurtmalar")
@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // USER

  @Post("user")
  @ApiOperation({ summary: "Yangi buyurtma yaratish (foydalanuvchi)" })
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({ status: 201, description: "Buyurtma yaratildi" })
  create(@Req() req: Request, @Body() dto: CreateOrderDto) {
    return this.orderService.create(dto, req);
  }

  @Get("user")
  @ApiOperation({ summary: "Foydalanuvchining buyurtmalari ro'yxati" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "punktId", required: false })
  @ApiResponse({ status: 200, description: "Buyurtmalar olindi" })
  getUserOrders(@Query() query: Prisma.OrdersWhereInput, @Req() req: Request) {
    return this.orderService.getUserOrders(query, req);
  }

  @Patch("user/:id")
  @ApiOperation({ summary: "Buyurtmani yangilash (foydalanuvchi)" })
  @ApiParam({ name: "id", description: "Buyurtma ID" })
  @ApiBody({ type: UpdateOrderDto })
  @ApiResponse({ status: 200, description: "Buyurtma yangilandi" })
  update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() dto: UpdateOrderDto
  ) {
    return this.orderService.update(id, dto, req);
  }

  // PUNKT ADMIN

  @Get("punkt")
  @ApiOperation({ summary: "Punkt buyurtmalari (punkt admin)" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "userId", required: false })
  @ApiResponse({ status: 200, description: "Punktdagi buyurtmalar olindi" })
  findPunktOrders(
    @Query() query: Prisma.OrdersWhereInput,
    @Req() req: Request
  ) {
    return this.orderService.getPunktOrders(query, req);
  }

  @Patch("punkt/:id")
  @ApiOperation({ summary: "Buyurtmani yangilash (punkt admin)" })
  @ApiParam({ name: "id", description: "Buyurtma ID" })
  @ApiBody({ type: UpdateOrderDtoForPunktAdmin })
  @ApiResponse({ status: 200, description: "Buyurtma yangilandi" })
  updateForPunktAdmin(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() dto: UpdateOrderDtoForPunktAdmin
  ) {
    return this.orderService.updatOrdersForPunktAdmin(id, dto, req);
  }

  // ADMIN

  @Get("admin")
  @ApiOperation({ summary: "Barcha buyurtmalar (admin)" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "punktId", required: false })
  @ApiQuery({ name: "userId", required: false })
  @ApiResponse({ status: 200, description: "Buyurtmalar ro'yxati" })
  getAllOrders(@Query() query: Prisma.OrdersWhereInput, @Req() req: Request) {
    return this.orderService.getAllOrders(query);
  }

  @Get("admin/getYearOrders")
  @ApiOperation({ summary: "Bir yillik barcha buyurtmalar (admin)" })
  @ApiQuery({ name: "year", required: true })
  @ApiResponse({ status: 200, description: "Bir yillik buyurtmalar ro'yxati" })
  getYearOrders(@Query() query: GetOrdersByYear) {
    return this.orderService.getYearOrders(query);
  }

  @Get("admin/getMonthOrders")
  @ApiOperation({ summary: "Bir oylik barcha buyurtmalar (admin)" })
  @ApiQuery({ name: "month", required: true })
  @ApiResponse({ status: 200, description: "Bir oylik buyurtmalar soni" })
  getMonthOrders(@Query() query: GetOrdersByMonth) {
    return this.orderService.getMonthOrders(query);
  }

  // api for auto sleep

  @Get("keepHealthServer")
  @ApiOperation({ summary: "Keep server from auto sleep" })
  async keepHealthServer(@Res() res: Response) {
    return this.orderService.keepHealthServer(res);
  }
}
