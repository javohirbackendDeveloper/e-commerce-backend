import { UpdateOrderStatus } from "../enums/orderStatus.enum";
import { OrderStatus } from "@prisma/client";
export declare class UpdateOrderDto {
    recipient_firstname?: string;
    recipient_lastname?: string;
    recipient_locationText?: string;
    recipient_phone?: string;
    status?: UpdateOrderStatus;
}
export declare class UpdateOrderDtoForPunktAdmin {
    status?: OrderStatus;
}
