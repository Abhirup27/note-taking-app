import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import {User} from "../entities/user.entity";

export class Seeder1750498742685 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
    const repository = dataSource.getRepository(User);
        const userFactory = factoryManager.get(User); // Get the User factory

        // Generate and save 10 random users
        await userFactory.saveMany(10);
    }
}
