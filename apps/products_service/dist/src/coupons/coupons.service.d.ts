import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
import { PrismaService } from "prisma/prisma.service";
import { Coupon } from "@prisma/client";
export declare class CouponsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCouponDto: CreateCouponDto): Promise<Coupon>;
    findAll(): Promise<Coupon[]>;
    findOne(id: string): Promise<Coupon>;
    update(id: string, updateCouponDto: UpdateCouponDto): Promise<Coupon>;
    remove(id: string): Promise<Coupon>;
}
