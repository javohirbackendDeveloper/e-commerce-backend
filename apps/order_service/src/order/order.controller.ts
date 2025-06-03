import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
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
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

@ApiTags("order_service/order")
@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // USER APIS

  @Post("user")
  @ApiOperation({ summary: "Foydalanuvchi tomonidan yangi buyurtma yaratish" })
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({
    status: 201,
    description: "Buyurtma muvaffaqiyatli yaratildi",
  })
  create(@Req() req: Request, @Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto, req);
  }

  @Get("user")
  @ApiOperation({ summary: "Foydalanuvchining barcha buyurtmalari" })
  @ApiQuery({ name: "status", required: false, description: "Buyurtma holati" })
  @ApiQuery({ name: "punktId", required: false, description: "Punkt ID" })
  @ApiResponse({ status: 200, description: "Buyurtmalar ro'yxati" })
  getUserOrders(
    @Query() filterQueries: Prisma.OrdersWhereInput,
    @Req() req: Request
  ) {
    return this.orderService.getUserOrders(filterQueries, req);
  }

  @Patch("user/:id")
  @ApiOperation({ summary: "Foydalanuvchi o‘zining buyurtmasini yangilaydi" })
  @ApiParam({ name: "id", description: "Buyurtma ID" })
  @ApiBody({ type: UpdateOrderDto })
  @ApiResponse({ status: 200, description: "Buyurtma yangilandi" })
  update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() updateOrderDto: UpdateOrderDto
  ) {
    return this.orderService.update(id, updateOrderDto, req);
  }

  // PUNKT ADMIN APIS

  @Get("punkt")
  @ApiOperation({ summary: "Punkt admin uchun buyurtmalar ro'yxati" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "userId", required: false })
  @ApiResponse({ status: 200, description: "Punktdagi buyurtmalar ro'yxati" })
  findPunktOrders(
    @Query() filterQueries: Prisma.OrdersWhereInput,
    @Req() req: Request
  ) {
    return this.orderService.getPunktOrders(filterQueries, req);
  }

  @Patch("punkt/:id")
  @ApiOperation({ summary: "Punkt admin buyurtmani yangilaydi" })
  @ApiParam({ name: "id", description: "Buyurtma ID" })
  @ApiBody({ type: UpdateOrderDtoForPunktAdmin })
  @ApiResponse({
    status: 200,
    description: "Buyurtma punkt admin tomonidan yangilandi",
  })
  updateForPunktAdmin(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() updateOrderDto: UpdateOrderDtoForPunktAdmin
  ) {
    return this.orderService.updatOrdersForPunktAdmin(id, updateOrderDto, req);
  }

  // ADMIN APIS

  @Get("admin")
  @ApiOperation({ summary: "Admin barcha buyurtmalarni ko‘radi" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "punktId", required: false })
  @ApiQuery({ name: "userId", required: false })
  @ApiResponse({ status: 200, description: "Barcha buyurtmalar ro'yxati" })
  getAllOrders(
    @Query() filterQueries: Prisma.OrdersWhereInput,
    @Req() req: Request
  ) {
    return this.orderService.getAllOrders(filterQueries);
  }
}
