import { Injectable } from '@nestjs/common';
import { CartDTO } from 'src/dto/cart.dto';

@Injectable()
export class CartService {
  private carts: CartDTO[] = [
    { id: 1, userId: 'user001', items: [1, 2] },
    { id: 2, userId: 'user002', items: [3] },
  ];
  findAll(): CartDTO[] {
    return this.carts;
  }

  findByUserId(userId: string) {
    return this.carts.find((c) => c.userId === userId);
  }

  findByUserIdAndCartId(userId: string, cartId: number) {
    return this.carts.find((c) => c.userId === userId && c.id === cartId);
  }
}
