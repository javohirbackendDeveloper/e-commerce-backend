"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const deliverType_enum_1 = require("./enums/deliverType.enum");
const paymentStatus_enum_1 = require("./enums/paymentStatus.enum");
const cart_service_1 = require("../cart/cart.service");
const rxjs_1 = require("rxjs");
const microservices_1 = require("@nestjs/microservices");
const prisma_service_1 = require("../../prisma/prisma.service");
let OrderService = class OrderService {
    constructor(cartService, orderClient, punktClient, staffClient, prismaService) {
        this.cartService = cartService;
        this.orderClient = orderClient;
        this.punktClient = punktClient;
        this.staffClient = staffClient;
        this.prismaService = prismaService;
    }
    async create(createOrderDto, req) {
        var _a;
        try {
            const { deliveringType, paymenttype, locationLatitude, locationLongitude, recipient_locationText, punktId, recipient_firstname, recipient_lastname, recipient_phone, payment: { amount, card_number, payment_type }, } = createOrderDto;
            const userId = req.headers["x_user_id"];
            if (!userId) {
                throw new common_1.HttpException("Please login again to continue", common_1.HttpStatus.UNAUTHORIZED);
            }
            if (deliveringType === "Courier" &&
                (!locationLatitude || !locationLongitude)) {
                throw new common_1.HttpException("Please select your location for our couriers", common_1.HttpStatus.BAD_REQUEST);
            }
            else if (deliveringType === "Punkt") {
                if (!punktId) {
                    throw new common_1.HttpException("Punkt ID is required", common_1.HttpStatus.BAD_REQUEST);
                }
                const punkt = await (0, rxjs_1.firstValueFrom)(this.punktClient.send("get_one_punkt", punktId));
                if (!punkt) {
                    throw new common_1.HttpException("This punkt not found with this id " + punktId, common_1.HttpStatus.NOT_FOUND);
                }
            }
            const cartProducts = await this.cartService.findAll(req);
            const { grandPrice, cartItemsWithProduct } = cartProducts;
            if (!cartItemsWithProduct.length) {
                throw new common_1.HttpException("Please firstly add product to your cart", common_1.HttpStatus.NOT_FOUND);
            }
            console.log({ grandPrice });
            if (paymenttype === paymentStatus_enum_1.PaymentStatus.Card) {
                if (amount !== grandPrice) {
                    throw new common_1.HttpException("Please pay enough money", common_1.HttpStatus.CONFLICT);
                }
            }
            const orderStatus = paymenttype === paymentStatus_enum_1.PaymentStatus.Card ? "Paid" : "AwaitingPayment";
            const deliverTime = new Date(Date.now() +
                (deliveringType === deliverType_enum_1.DeliverStatus.Punkt ? 2 : 3) * 24 * 60 * 60 * 1000);
            let createData = {
                userId: userId,
                status: orderStatus,
                totalPrice: grandPrice,
                deliveringType,
                paymenttype,
                locationText: recipient_locationText,
                recipient_firstname,
                recipient_lastname,
                recipient_phone,
                deliverTime,
            };
            if (deliveringType === deliverType_enum_1.DeliverStatus.Courier) {
                const theNearestPunkt = await this.getTheNearestPunkt(locationLongitude, locationLatitude);
                createData.locationLongitude = locationLongitude;
                createData.locationLatitude = locationLatitude;
                createData.punktId = (_a = theNearestPunkt.nearestPunkt) === null || _a === void 0 ? void 0 : _a.id;
            }
            else {
                createData.punktId = punktId;
            }
            const order = await this.prismaService.orders.create({
                data: Object.assign({}, createData),
            });
            return order;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getTheNearestPunkt(longitude, latitude) {
        try {
            const allPunkts = await (0, rxjs_1.firstValueFrom)(this.punktClient.send("get_all_punkts", {}));
            if (!allPunkts || allPunkts.length === 0) {
                throw new common_1.HttpException("No punkts found", common_1.HttpStatus.NOT_FOUND);
            }
            let nearestPunkt = null;
            let minDistance = Infinity;
            for (const punkt of allPunkts) {
                const distance = this.calculateHaversineDistance(latitude, longitude, punkt.locationLatitude, punkt.locationLongitude);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestPunkt = punkt;
                }
            }
            return {
                nearestPunkt,
                distance: minDistance,
            };
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserOrders(filterQueries, req) {
        try {
            const userId = req.headers["x_user_id"];
            const existFilter = await this.existFilters(filterQueries);
            const orders = await this.prismaService.orders.findMany({
                where: Object.assign({ userId: userId }, existFilter),
            });
            return orders;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateOrderDto, req) {
        try {
            const { recipient_firstname, recipient_lastname, recipient_locationText, recipient_phone, } = updateOrderDto;
            const userId = req.headers["x_user_id"];
            const order = await this.prismaService.orders.findUnique({
                where: { id, userId: userId },
            });
            if (!order) {
                throw new common_1.HttpException("This order not found with this id " + id, common_1.HttpStatus.NOT_FOUND);
            }
            if (order.userId.toString() !== userId.toString()) {
                throw new common_1.HttpException("You cannot update this order", common_1.HttpStatus.UNAUTHORIZED);
            }
            const allowedOrderStatus = ["AwaitingPayment", "Created"];
            if (!allowedOrderStatus.includes(order.status)) {
                throw new common_1.HttpException("You cannot update this order", common_1.HttpStatus.BAD_REQUEST);
            }
            const updatedOrder = await this.prismaService.orders.update({
                where: { id },
                data: {
                    recipient_firstname,
                    recipient_lastname,
                    locationText: recipient_locationText,
                    recipient_phone,
                    status: "Cancelled",
                },
            });
            return updatedOrder;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getPunktOrders(filterQueries, req) {
        try {
            const punktAdmin = await this.getOnePunktAdmin(req);
            if (!punktAdmin.punktId) {
                throw new common_1.HttpException("You don't have any punkts yet", common_1.HttpStatus.BAD_REQUEST);
            }
            const existFilters = await this.existFilters(filterQueries);
            const orders = await this.prismaService.orders.findMany({
                where: Object.assign({ punktId: punktAdmin.punktId }, existFilters),
            });
            return orders;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updatOrdersForPunktAdmin(id, updateOrderDto, req) {
        try {
            const { status } = updateOrderDto;
            const punktAdmin = await this.getOnePunktAdmin(req);
            if (!punktAdmin.punktId) {
                throw new common_1.HttpException("You don't have any punkt yet", common_1.HttpStatus.BAD_REQUEST);
            }
            const order = await this.prismaService.orders.findUnique({
                where: { id, punktId: punktAdmin.punktId },
            });
            if (!order) {
                throw new common_1.HttpException("This order not found in your punkt", common_1.HttpStatus.NOT_FOUND);
            }
            const allowedOrderStatus = [
                "Processing",
                "Shipped",
                "Delivered",
                "Cancelled",
            ];
            if (!allowedOrderStatus.includes(status)) {
                throw new common_1.HttpException("You cannot update this order to this status " + status, common_1.HttpStatus.BAD_REQUEST);
            }
            const updatedOrder = await this.prismaService.orders.update({
                where: { id },
                data: {
                    status,
                },
            });
            return updatedOrder;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    existFilters(filterQueries) {
        let existFilter = {};
        if (filterQueries.status) {
            existFilter.status = filterQueries.status;
        }
        if (filterQueries.deliveringType &&
            Object.values(deliverType_enum_1.DeliverStatus).includes(filterQueries.deliveringType)) {
            existFilter.deliveringType = filterQueries.deliveringType;
        }
        if (filterQueries.paymenttype &&
            Object.values(paymentStatus_enum_1.PaymentStatus).includes(filterQueries.paymenttype)) {
            existFilter.paymenttype = filterQueries.paymenttype;
        }
        if (filterQueries.punktId) {
            existFilter.punktId = filterQueries.punktId;
        }
        return existFilter;
    }
    async getOnePunktAdmin(req) {
        const punktAdminId = req.headers["x_user_id"];
        const punktAdmin = await (0, rxjs_1.firstValueFrom)(this.staffClient.send("get_one_punktAdmin", punktAdminId));
        if (!punktAdmin) {
            throw new common_1.HttpException("You are not punkt-admin", common_1.HttpStatus.UNAUTHORIZED);
        }
        return punktAdmin;
    }
    calculateHaversineDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = this.toRadians(lat2 - lat1);
        const dLon = this.toRadians(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRadians(lat1)) *
                Math.cos(this.toRadians(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    async getAllOrders(filterQueries) {
        try {
            const existFilter = await this.existFilters(filterQueries);
            const orders = await this.prismaService.orders.findMany({
                where: Object.assign({}, existFilter),
            });
            const sortedOrders = orders.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            return sortedOrders;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getYearOrders(query) {
        try {
            const { year } = query;
            const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
            const endDate = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);
            const orders = await this.prismaService.orders.findMany({
                where: {
                    createdAt: {
                        gte: startDate,
                        lte: endDate,
                    },
                },
            });
            const sortedOrders = orders.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            return sortedOrders;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)("ORDER_SERVICE")),
    __param(2, (0, common_1.Inject)("PUNKT_SERVICE")),
    __param(3, (0, common_1.Inject)("STAFF_SERVICE")),
    __metadata("design:paramtypes", [cart_service_1.CartService,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map