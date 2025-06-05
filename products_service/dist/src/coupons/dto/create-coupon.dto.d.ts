export declare enum CouponStatus {
    FAOL = "FAOL",
    NOFAOL = "NOFAOL"
}
export declare class CreateCouponDto {
    code: string;
    discount_value: number;
    min_order_amount: number;
    usage_limit: number;
    end_date: string;
    status?: CouponStatus;
}
