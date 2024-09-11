import { Controller, Get } from '@nestjs/common';
import { UserCompanyService } from './user-company.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user-company')
@Controller('user-company')
export class UserCompanyController {
    constructor(private readonly userCompanyService: UserCompanyService) { }

    @Get()
    @ApiOperation({ summary: 'Get users with company' })
    @ApiResponse({ status: 200, description: 'Show all users with their company' })
    async getUsersWithCompanies() {
        return this.userCompanyService.getUsersWithCompanies();
    }
}
