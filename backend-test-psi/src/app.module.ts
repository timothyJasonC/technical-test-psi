import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutController } from './checkout/checkout.controller';
import { CheckoutService } from './checkout/checkout.service';
import { AuthModule } from './auth/auth.module';
import { UserCompanyModule } from './user-company/user-company.module';
import { UserModule } from './user/user.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [AuthModule, UserCompanyModule, UserModule,],
  controllers: [AppController, CheckoutController],
  providers: [AppService, CheckoutService],
})
export class AppModule {}
