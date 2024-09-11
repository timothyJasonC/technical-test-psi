import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';

interface User {
    id: string;
    username: string;
}

@Injectable()
export class AuthService {
    //semua user yang login akan disimpan disini :) Jadi tidak perlu menggunakkan relasi database
    private users: User[] = [];

    constructor(private readonly jwtService: JwtService) { }

    login(username: string) {
        const existingUser = this.users.find(user => user.username === username);
        if (existingUser) {
            return {message: 'username must be unique'}
        }

        const id = uuidv4();
        const token = this.jwtService.sign({ id, username });

        const user: User = { id, username };
        this.users.push(user);

        return { id, username, token };
    }
}
