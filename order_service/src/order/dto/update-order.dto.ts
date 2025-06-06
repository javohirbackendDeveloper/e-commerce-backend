import { IsEnum, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { UpdateOrderStatus } from "../enums/orderStatus.enum";
import { OrderStatus } from "@prisma/client";

export class UpdateOrderDto {
  @ApiPropertyOptional({
    description: "Oluvchining ismi",
    example: "Ali",
  })
  @IsString()
  @IsOptional()
  recipient_firstname?: string;

  @ApiPropertyOptional({
    description: "Oluvchining familiyasi",
    example: "Valiyev",
  })
  @IsString()
  @IsOptional()
  recipient_lastname?: string;

  @ApiPropertyOptional({
    description: "Oluvchining manzili (matn)",
    example: "Toshkent, Chilonzor, 15-mavze",
  })
  @IsString()
  @IsOptional()
  recipient_locationText?: string;

  @ApiPropertyOptional({
    description: "Oluvchining telefon raqami",
    example: "+998901234567",
  })
  @IsPhoneNumber()
  @IsOptional()
  recipient_phone?: string;

  @ApiPropertyOptional({
    enum: UpdateOrderStatus,
    description: "Buyurtma statusi",
    example: UpdateOrderStatus.Cancelled,
  })
  @IsEnum(UpdateOrderStatus)
  @IsOptional()
  status?: UpdateOrderStatus;
}

export class UpdateOrderDtoForPunktAdmin {
  @ApiPropertyOptional({
    enum: OrderStatus,
    description: "Admin tomonidan o‘zgartiriladigan buyurtma statusi",
    example: OrderStatus.Cancelled,
  })
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;
}
