"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderStatus = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Created"] = 0] = "Created";
    OrderStatus[OrderStatus["AwaitingPayment"] = 1] = "AwaitingPayment";
    OrderStatus[OrderStatus["Paid"] = 2] = "Paid";
    OrderStatus[OrderStatus["Processing"] = 3] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 4] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 5] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 6] = "Cancelled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var UpdateOrderStatus;
(function (UpdateOrderStatus) {
    UpdateOrderStatus[UpdateOrderStatus["Cancelled"] = 0] = "Cancelled";
})(UpdateOrderStatus || (exports.UpdateOrderStatus = UpdateOrderStatus = {}));
//# sourceMappingURL=orderStatus.enum.js.map