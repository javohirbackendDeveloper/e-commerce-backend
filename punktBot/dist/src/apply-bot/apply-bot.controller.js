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
exports.ApplyBotController = void 0;
const common_1 = require("@nestjs/common");
const apply_bot_service_1 = require("./apply-bot.service");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const prisma_service_1 = require("../../prisma/prisma.service");
const rxjs_1 = require("rxjs");
const microservices_1 = require("@nestjs/microservices");
let ApplyBotController = class ApplyBotController {
    constructor(prismaService, applyBotService, punktClient) {
        this.prismaService = prismaService;
        this.applyBotService = applyBotService;
        this.punktClient = punktClient;
    }
    async onStart(ctx) {
        var _a;
        ctx.session = { step: "get_name", data: {} };
        await ctx.reply(`Assalomu alaykum hurmatli mijoz! \nPunkt ochishga ariza berayotganingizdan xursandmiz. \nIltimos, ismingizni kiriting:`);
        ctx.session.data.username = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.username;
    }
    async onText(ctx) {
        const message = ctx.message;
        const text = message === null || message === void 0 ? void 0 : message.text;
        if (!ctx.session) {
            ctx.session = { step: "get_name", data: {} };
        }
        switch (ctx.session.step) {
            case "get_name":
                ctx.session.data.name = text;
                ctx.session.step = "get_phone";
                return ctx.reply("Telefon raqamingizni kiriting. U quyidagi formatda bo'lishi kerak: +998972890930", {
                    reply_markup: {
                        keyboard: [[{ text: "⬅️ Ortga" }]],
                        resize_keyboard: true,
                        one_time_keyboard: true,
                    },
                });
            case "get_phone":
                if (text === "⬅️ Ortga") {
                    ctx.session.step = "get_name";
                    return ctx.reply("Qaytildi. Iltimos, ismingizni kiriting:");
                }
                ctx.session.data.phone = text;
                ctx.session.step = "select_province";
                const provinces = await (0, rxjs_1.firstValueFrom)(this.punktClient.send("get_provinces", ""));
                ctx.session.data._provinces = provinces;
                const provinceButtons = provinces.map((p) => ({
                    text: p.title,
                    callback_data: `province_${p.id}`,
                }));
                const inlineRows = [];
                for (let i = 0; i < provinceButtons.length; i += 2) {
                    inlineRows.push(provinceButtons.slice(i, i + 2));
                }
                return ctx.reply("Viloyatingizni tanlang:", {
                    reply_markup: {
                        inline_keyboard: inlineRows,
                    },
                });
            case "select_city":
                if (text === "⬅️ Ortga") {
                    ctx.session.step = "select_province";
                    const provinces = ctx.session.data._provinces;
                    const provinceButtons = provinces.map((p) => ({
                        text: p.title,
                        callback_data: `province_${p.id}`,
                    }));
                    const inlineRows = [];
                    for (let i = 0; i < provinceButtons.length; i += 2) {
                        inlineRows.push(provinceButtons.slice(i, i + 2));
                    }
                    return ctx.reply("Viloyatingizni tanlang:", {
                        reply_markup: {
                            inline_keyboard: inlineRows,
                        },
                    });
                }
                return ctx.reply("Iltimos, lokatsiyangizni yuboring.");
            case "get_location":
                return ctx.reply("Iltimos, yuqoridagi tugma orqali lokatsiyani yuboring.");
            case "done":
                if (text === "✅ Ha") {
                    await ctx.reply("Ajoyib! Siz bilan tez orada adminlarimiz bog'lanadi.");
                    const data = ctx.session.data;
                    const createdApply = await this.prismaService.applyForPunkt.create({
                        data: {
                            city: data.city,
                            latitude: data.latitude,
                            longitude: data.longitude,
                            name: data.name,
                            phone_number: data.phone,
                            province: data.province,
                            telegram_username: data.username,
                        },
                    });
                    console.log({ createdApply });
                }
                else if (text === "❌ Yo'q") {
                    await ctx.reply("Afsuski hozircha biz siz bilan ishlay olmaymiz. Mablag' to‘plaganingizda qayta aloqaga chiqing.");
                }
                break;
        }
    }
    async onCallbackQuery(ctx) {
        var _a;
        const callbackData = (_a = ctx.callbackQuery) === null || _a === void 0 ? void 0 : _a.data;
        if (!callbackData)
            return ctx.answerCbQuery();
        if (ctx.session.step === "select_province" &&
            callbackData.startsWith("province_")) {
            const provinceId = callbackData.split("_")[1];
            const provinces = ctx.session.data._provinces ||
                (await (0, rxjs_1.firstValueFrom)(this.punktClient.send("get_provinces", "")));
            const selectedProvince = provinces.find((p) => p.id.toString() === provinceId);
            if (!selectedProvince)
                return ctx.reply("Viloyat topilmadi.");
            ctx.session.data.province = selectedProvince.title;
            ctx.session.data.provinceId = selectedProvince.id;
            ctx.session.step = "select_city";
            const cities = await (0, rxjs_1.firstValueFrom)(this.punktClient.send("get_cities_by_province", provinceId));
            ctx.session.data._cities = cities;
            const cityButtons = cities.map((c) => ({
                text: c.title,
                callback_data: `city_${c.id}`,
            }));
            const rows = [];
            for (let i = 0; i < cityButtons.length; i += 2) {
                rows.push(cityButtons.slice(i, i + 2));
            }
            rows.push([{ text: "⬅️ Ortga", callback_data: "back_to_province" }]);
            await ctx.reply("Shaharingizni tanlang:", {
                reply_markup: {
                    inline_keyboard: rows,
                },
            });
            return ctx.answerCbQuery();
        }
        if (ctx.session.step === "select_city" &&
            callbackData.startsWith("city_")) {
            const cityId = callbackData.split("_")[1];
            const cities = ctx.session.data._cities || [];
            const selectedCity = cities.find((c) => c.id.toString() === cityId);
            if (!selectedCity)
                return ctx.reply("Shahar topilmadi.");
            ctx.session.data.city = selectedCity.title;
            ctx.session.data.cityId = selectedCity.id;
            ctx.session.step = "get_location";
            await ctx.reply("Iltimos, lokatsiyangizni yuboring:", {
                reply_markup: {
                    keyboard: [
                        [{ text: "📍 Lokatsiyani yuborish", request_location: true }],
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                },
            });
            return ctx.answerCbQuery();
        }
        if (callbackData === "back_to_province") {
            ctx.session.step = "select_province";
            const provinces = ctx.session.data._provinces ||
                (await (0, rxjs_1.firstValueFrom)(this.punktClient.send("get_provinces", "")));
            const buttons = provinces.map((province) => ({
                text: province.title,
                callback_data: `province_${province.id}`,
            }));
            const inlineRows = [];
            for (let i = 0; i < buttons.length; i += 2) {
                inlineRows.push(buttons.slice(i, i + 2));
            }
            await ctx.reply("Viloyatingizni tanlang:", {
                reply_markup: {
                    inline_keyboard: inlineRows,
                },
            });
            return ctx.answerCbQuery();
        }
        return ctx.answerCbQuery();
    }
    async onLocation(ctx) {
        if (ctx.session.step === "get_location") {
            const location = ctx.message.location;
            if (location) {
                ctx.session.data.latitude = location.latitude;
                ctx.session.data.longitude = location.longitude;
                await ctx.reply(`Punkt ochish o'rtacha 40 million so'm bo'ladi, bunday pul sizda mavjudmi?`, {
                    reply_markup: {
                        keyboard: [[{ text: "✅ Ha" }, { text: "❌ Yo'q" }]],
                        resize_keyboard: true,
                        one_time_keyboard: true,
                    },
                });
                ctx.session.step = "done";
            }
            else {
                await ctx.reply("Iltimos, lokatsiyani yuboring.");
            }
        }
    }
};
exports.ApplyBotController = ApplyBotController;
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApplyBotController.prototype, "onStart", null);
__decorate([
    (0, nestjs_telegraf_1.On)("text"),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApplyBotController.prototype, "onText", null);
__decorate([
    (0, nestjs_telegraf_1.On)("callback_query"),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApplyBotController.prototype, "onCallbackQuery", null);
__decorate([
    (0, nestjs_telegraf_1.On)("location"),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApplyBotController.prototype, "onLocation", null);
exports.ApplyBotController = ApplyBotController = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    __param(2, (0, common_1.Inject)("PUNKT_SERVICE")),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        apply_bot_service_1.ApplyBotService,
        microservices_1.ClientProxy])
], ApplyBotController);
//# sourceMappingURL=apply-bot.controller.js.map