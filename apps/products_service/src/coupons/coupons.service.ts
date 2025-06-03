import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
import { PrismaService } from "prisma/prisma.service";
import { Coupon } from "generated/prisma";

@Injectable()
export class CouponsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCouponDto: CreateCouponDto): Promise<Coupon> {
    try {
      const { code, end_date } = createCouponDto;

      // checking code
      const existCode = await this.prismaService.coupon.findUnique({
        where: { code },
      });

      if (existCode) {
        throw new HttpException(
          "This coupon code already exist",
          HttpStatus.BAD_REQUEST
        );
      }

      // checking date

      if (new Date(end_date).getTime() <= Date.now()) {
        throw new HttpException(
          "End date must be later than now",
          HttpStatus.BAD_REQUEST
        );
      }

      const coupon = await this.prismaService.coupon.create({
        data: {
          ...createCouponDto,
        },
      });

      return coupon;
    } catch (err) {
      console.log({ err });

      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll(): Promise<Coupon[]> {
    try {
      const coupons = await this.prismaService.coupon.findMany();
      return coupons;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: string): Promise<Coupon> {
    try {
      return this.prismaService.coupon.findUnique({
        where: { id },
      });
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(id: string, updateCouponDto: UpdateCouponDto): Promise<Coupon> {
    try {
      const coupon = await this.prismaService.coupon.update({
        where: { id },
        data: { ...updateCouponDto },
      });

      return coupon;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string): Promise<Coupon> {
    try {
      const coupon = await this.prismaService.coupon.delete({
        where: { id },
      });

      return coupon;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
