import { CouponsService } from "./coupons.service";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
export declare class CouponsController {
    private readonly couponsService;
    constructor(couponsService: CouponsService);
    create(createCouponDto: CreateCouponDto): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("generated/prisma").$Enums.CouponStatus;
    }>;
    findAll(): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("generated/prisma").$Enums.CouponStatus;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("generated/prisma").$Enums.CouponStatus;
    }>;
    update(id: string, updateCouponDto: UpdateCouponDto): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("generated/prisma").$Enums.CouponStatus;
    }>;
    remove(id: string): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("generated/prisma").$Enums.CouponStatus;
    }>;
}
