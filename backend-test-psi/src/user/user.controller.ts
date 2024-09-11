import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @ApiOperation({ summary: 'Get user from random user api' })
    @ApiResponse({ status: 200, description: 'Users that already formatted from random user' })
    async getUsers(
        @Query('results') results: string,
        @Query('page') page: string) {
        const resultsNumber = parseInt(results, 10) || 10
        const pageNumber = parseInt(page, 10) || 1

        return this.userService.randomUser(resultsNumber, pageNumber);
    }
}
