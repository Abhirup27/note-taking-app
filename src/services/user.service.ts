// src/services/user.service.ts

import { User } from "../database/entities/user.entity";

import {Repository} from "typeorm";

export class UserService {
    constructor(
        private userRepository: Repository<User>,
    ) {
    }
    async getUsers(): Promise<User[]> {


        const users = await this.userRepository.find({where: { }});
        return users;
    }

}

// Export a singleton instance
//export const userService = new UserService();