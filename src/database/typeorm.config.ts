import config from '../config';
import {DataSource, DataSourceOptions} from "typeorm";
import path from "path";

export const dataSourceOptions : DataSourceOptions = {
    type: 'postgres',
    host: config.DB_HOST,
    database: config.DB_NAME,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,

    entities: [path.join(__dirname,  'entities', '*.entity.{ts,js}')],
    migrations: [path.join(__dirname,  'migrations', '*.{ts,js}')],
    synchronize: config.NODE_ENV === 'development',
    logging: false,
}
export default new DataSource(dataSourceOptions);
