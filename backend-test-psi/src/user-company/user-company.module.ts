import { Module } from '@nestjs/common';
import { UserCompanyService } from './user-company.service';
import { UserCompanyController } from './user-company.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [UserCompanyService, PrismaService],
  controllers: [UserCompanyController]
})
export class UserCompanyModule {}
