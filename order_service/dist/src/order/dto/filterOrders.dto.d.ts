import { DeliverStatus } from "../enums/deliverType.enum";
import { PaymentStatus } from "../enums/paymentStatus.enum";
import { OrderStatus } from "../enums/orderStatus.enum";
export declare class FilterOrdersDto {
    status?: OrderStatus;
    deliveringType?: DeliverStatus;
    paymenttype?: PaymentStatus;
}
