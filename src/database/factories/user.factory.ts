// src/factories/user.factory.ts
import { setSeederFactory } from 'typeorm-extension';
import { User } from '../entities/user.entity';
import { faker } from '@faker-js/faker';

export default setSeederFactory(User, () => {
    const user = new User();
    user.email = faker.internet.email();
    user.password = faker.internet.password({length: 12});
    return user;
});