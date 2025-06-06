import { DeliverStatus } from "../enums/deliverType.enum";
import { PaymentStatus } from "../enums/paymentStatus.enum";
declare class PaymentDto {
    amount: number;
    payment_type: string;
    card_number: string;
}
export declare class CreateOrderDto {
    paymenttype: PaymentStatus;
    deliveringType: DeliverStatus;
    locationLongitude?: number;
    locationLatitude?: number;
    punktId?: string;
    recipient_firstname: string;
    recipient_lastname: string;
    recipient_locationText: string;
    recipient_phone: string;
    payment?: PaymentDto;
}
export {};
