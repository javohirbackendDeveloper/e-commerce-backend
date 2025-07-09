import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
import { PrismaService } from "prisma/prisma.service";
import { Coupon } from "@prisma/client";
import { UseCouponDto } from "./dto/useCoupon.dto";
export declare class CouponsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCouponDto: CreateCouponDto): Promise<Coupon>;
    findByCode(data: UseCouponDto): Promise<{
        message: string;
        success: boolean;
    } | {
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("@prisma/client").$Enums.CouponStatus;
        success: boolean;
        message?: undefined;
    }>;
    findAll(): Promise<Coupon[]>;
    findOne(id: string): Promise<Coupon>;
    update(id: string, updateCouponDto: UpdateCouponDto): Promise<Coupon>;
    remove(id: string): Promise<Coupon>;
}
