import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'Budi', description: 'The username of the user' })
  username: string;
}
