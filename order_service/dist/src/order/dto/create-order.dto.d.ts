import { DeliverStatus } from "../enums/deliverType.enum";
import { PaymentStatus } from "../enums/paymentStatus.enum";
export declare class CreateOrderDto {
    paymenttype: PaymentStatus;
    deliveringType: DeliverStatus;
    locationLongitude?: number;
    locationLatitude?: number;
    punktId?: string;
    recipient_firstname: string;
    recipient_lastname: string;
    recipient_locationText?: string;
    recipient_phone: string;
}
