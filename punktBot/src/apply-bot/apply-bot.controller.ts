import { Controller, Inject } from "@nestjs/common";
import { ApplyBotService } from "./apply-bot.service";
import { Ctx, On, Start, Update } from "nestjs-telegraf";
import { Message } from "telegraf/typings/core/types/typegram";
import { MyContext } from "./session.interface";
import { PrismaService } from "prisma/prisma.service";
import { firstValueFrom } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";

@Update()
export class ApplyBotController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly applyBotService: ApplyBotService,
    @Inject("PUNKT_SERVICE") private readonly punktClient: ClientProxy
  ) {}

  @Start()
  async onStart(@Ctx() ctx: MyContext) {
    ctx.session = { step: "get_name", data: {} };
    await ctx.reply(
      `Assalomu alaykum hurmatli mijoz! \nPunkt ochishga ariza berayotganingizdan xursandmiz. \nIltimos, ismingizni kiriting:`
    );
    ctx.session.data.username = ctx.from?.username;
  }

  @On("text")
  async onText(@Ctx() ctx: MyContext) {
    const message = ctx.message as Message.TextMessage;
    const text = message?.text;

    if (!ctx.session) {
      ctx.session = { step: "get_name", data: {} };
    }

    switch (ctx.session.step) {
      case "get_name":
        ctx.session.data.name = text;
        ctx.session.step = "get_phone";

        return ctx.reply(
          "Telefon raqamingizni kiriting. U quyidagi formatda bo'lishi kerak: +998972890930",
          {
            reply_markup: {
              keyboard: [[{ text: "⬅️ Ortga" }]],
              resize_keyboard: true,
              one_time_keyboard: true,
            },
          }
        );

      case "get_phone":
        if (text === "⬅️ Ortga") {
          ctx.session.step = "get_name";
          return ctx.reply("Qaytildi. Iltimos, ismingizni kiriting:");
        }

        ctx.session.data.phone = text;
        ctx.session.step = "select_province";

        const provinces = await firstValueFrom(
          this.punktClient.send("get_provinces", "")
        );

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
        return ctx.reply(
          "Iltimos, yuqoridagi tugma orqali lokatsiyani yuboring."
        );

      case "done":
        if (text === "✅ Ha") {
          await ctx.reply(
            "Ajoyib! Siz bilan tez orada adminlarimiz bog'lanadi."
          );
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
        } else if (text === "❌ Yo'q") {
          await ctx.reply(
            "Afsuski hozircha biz siz bilan ishlay olmaymiz. Mablag' to‘plaganingizda qayta aloqaga chiqing."
          );
        }
        break;
    }
  }

  @On("callback_query")
  async onCallbackQuery(@Ctx() ctx: MyContext) {
    const callbackData = (ctx.callbackQuery as any)?.data;
    if (!callbackData) return ctx.answerCbQuery();

    if (
      ctx.session.step === "select_province" &&
      callbackData.startsWith("province_")
    ) {
      const provinceId = callbackData.split("_")[1];
      const provinces =
        ctx.session.data._provinces ||
        (await firstValueFrom(this.punktClient.send("get_provinces", "")));

      const selectedProvince = provinces.find(
        (p) => p.id.toString() === provinceId
      );
      if (!selectedProvince) return ctx.reply("Viloyat topilmadi.");

      ctx.session.data.province = selectedProvince.title;
      ctx.session.data.provinceId = selectedProvince.id;
      ctx.session.step = "select_city";

      const cities = await firstValueFrom(
        this.punktClient.send("get_cities_by_province", provinceId)
      );
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

    if (
      ctx.session.step === "select_city" &&
      callbackData.startsWith("city_")
    ) {
      const cityId = callbackData.split("_")[1];
      const cities = ctx.session.data._cities || [];
      const selectedCity = cities.find((c) => c.id.toString() === cityId);
      if (!selectedCity) return ctx.reply("Shahar topilmadi.");

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

      const provinces =
        ctx.session.data._provinces ||
        (await firstValueFrom(this.punktClient.send("get_provinces", "")));

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

  @On("location")
  async onLocation(@Ctx() ctx: MyContext) {
    if (ctx.session.step === "get_location") {
      const location = (ctx.message as any).location;
      if (location) {
        ctx.session.data.latitude = location.latitude;
        ctx.session.data.longitude = location.longitude;

        await ctx.reply(
          `Punkt ochish o'rtacha 40 million so'm bo'ladi, bunday pul sizda mavjudmi?`,
          {
            reply_markup: {
              keyboard: [[{ text: "✅ Ha" }, { text: "❌ Yo'q" }]],
              resize_keyboard: true,
              one_time_keyboard: true,
            },
          }
        );

        ctx.session.step = "done";
      } else {
        await ctx.reply("Iltimos, lokatsiyani yuboring.");
      }
    }
  }
}
