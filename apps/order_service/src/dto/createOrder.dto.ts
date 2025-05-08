class OrderItem {
  productId: string;
  quantity: number;
}

export class CreateOrderDto {
  userId: string;
  productIds: OrderItem[];
}
