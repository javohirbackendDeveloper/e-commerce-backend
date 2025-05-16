export enum OrderStatus {
  Created, // Foydalanuvchi order bergan
  AwaitingPayment, // To‘lov kutilmoqda (Yetkazib berganda to'lanadi)
  Paid, // To‘lov muvaffaqiyatli bo‘lgan
  Processing, // Operator/kuryer tayinlanmoqda
  Shipped, // Yetkazib berish yo‘lda
  Delivered, // Mijozga yetkazildi
  Cancelled, // Mijoz yoki tizim tomonidan bekor qilingan
}
export enum UpdateOrderStatus {
  Cancelled,
}
