import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CheckoutService {
  checkout(price: number, voucher: number) {
    const discountedPrice = price * (1 - voucher / 100); // Apply voucher discount
    const points = (price * (voucher / 100)) * 0.02; // Calculate points

    return {
      orderId: uuidv4(),
      originalPrice: price,
      discountedPrice,
      points,
      message: `You have received ${points} points!`,
    };
  }
}
