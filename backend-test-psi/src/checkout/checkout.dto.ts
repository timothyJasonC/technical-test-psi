import { ApiProperty } from '@nestjs/swagger';

export class CheckoutDto {
  @ApiProperty({ example: 5000000, description: 'The normal price' })
  price: number;

  @ApiProperty({ example: 50, description: 'The voucher input with number of percentage' })
  voucher: number;
}
