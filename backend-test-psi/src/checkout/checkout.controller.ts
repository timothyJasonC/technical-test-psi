import { Controller, Post, Body } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CheckoutDto } from './checkout.dto';

@ApiTags('checkout')
@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  @ApiOperation({ summary: 'Checkout System' })
  @ApiResponse({ status: 200, description: 'Total points earned' })
  @ApiBody({ type: CheckoutDto })
  checkout(@Body('price') price: number, @Body('voucher') voucher: number) {
    return this.checkoutService.checkout(price, voucher);
  }
}
