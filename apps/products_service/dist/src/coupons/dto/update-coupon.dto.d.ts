import { CreateCouponDto } from "./create-coupon.dto";
export declare enum CouponStatus {
    FAOL = "FAOL",
    NOFAOL = "NOFAOL"
}
declare const UpdateCouponDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCouponDto>>;
export declare class UpdateCouponDto extends UpdateCouponDto_base {
    code?: string;
    discount_value?: number;
    min_order_amount?: number;
    usage_limit: number;
    end_date: string;
    status?: CouponStatus;
}
export {};
