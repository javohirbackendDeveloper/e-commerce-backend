import { CouponsService } from "./coupons.service";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
import { UseCouponDto } from "./dto/useCoupon.dto";
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
        status: import("@prisma/client").$Enums.CouponStatus;
    }>;
    findAll(): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("@prisma/client").$Enums.CouponStatus;
    }[]>;
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
    findOne(id: string): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("@prisma/client").$Enums.CouponStatus;
    }>;
    update(id: string, updateCouponDto: UpdateCouponDto): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("@prisma/client").$Enums.CouponStatus;
    }>;
    remove(id: string): Promise<{
        id: string;
        code: string;
        discount_value: number;
        min_order_amount: number;
        usage_limit: number;
        end_date: Date;
        status: import("@prisma/client").$Enums.CouponStatus;
    }>;
}
