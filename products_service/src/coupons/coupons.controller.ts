import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CouponsService } from "./coupons.service";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from "@nestjs/swagger";
import { UseCouponDto } from "./dto/useCoupon.dto";

@ApiTags("products_service/coupon")
@Controller("coupon")
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Post()
  @ApiOperation({ summary: "Yangi kupon yaratish" })
  @ApiBody({ type: CreateCouponDto })
  @ApiResponse({ status: 201, description: "Kupon yaratildi" })
  create(@Body() createCouponDto: CreateCouponDto) {
    return this.couponsService.create(createCouponDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha kuponlarni olish" })
  @ApiResponse({ status: 200, description: "Kuponlar ro'yxati" })
  findAll() {
    return this.couponsService.findAll();
  }

  @Post("findByCode")
  @ApiOperation({ summary: "Bitta kuponni code orqali olish" })
  @ApiResponse({ status: 200, description: "Kupon by code" })
  findByCode(@Body() data: UseCouponDto) {
    return this.couponsService.findByCode(data);
  }

  @Get(":id")
  @ApiOperation({ summary: "ID bo'yicha kuponni olish" })
  @ApiParam({ name: "id", description: "Kupon ID" })
  @ApiResponse({ status: 200, description: "Kupon ma'lumotlari" })
  findOne(@Param("id") id: string) {
    return this.couponsService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Kuponni yangilash" })
  @ApiParam({ name: "id", description: "Kupon ID" })
  @ApiBody({ type: UpdateCouponDto })
  @ApiResponse({ status: 200, description: "Kupon yangilandi" })
  update(@Param("id") id: string, @Body() updateCouponDto: UpdateCouponDto) {
    return this.couponsService.update(id, updateCouponDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Kuponni o‘chirish" })
  @ApiParam({ name: "id", description: "Kupon ID" })
  @ApiResponse({ status: 200, description: "Kupon o‘chirildi" })
  remove(@Param("id") id: string) {
    return this.couponsService.remove(id);
  }
}
