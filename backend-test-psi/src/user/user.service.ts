import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async randomUser(results: number, page: number) {
        const url = `https://randomuser.me/api?results=${results}&page=${page}`

        try {
            const response = await fetch(url)
            const data = await response.json()
            return data.results.map(user => ({
                name: `${user.name.title}, ${user.name.first} ${user.name.last}`,
                location: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
                email: user.email,
                age: user.dob.age,
                phone: user.phone,
                cell: user.cell,
                picture: [
                    user.picture.large,
                    user.picture.medium,
                    user.picture.thumbnail
                ]
            }))
            // return data
        } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`)
        }
    }
}
