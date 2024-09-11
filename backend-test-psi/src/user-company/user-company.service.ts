import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserCompanyService {
    constructor(private prisma: PrismaService) {}

    async getUsersWithCompanies() {
      return this.prisma.user.findMany({
        include: {
          company: true,
        },
      });
    }
}
