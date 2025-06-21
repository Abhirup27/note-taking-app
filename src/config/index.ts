import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';


const NODE_ENV = process.env.NODE_ENV || 'development';

const envFiles = [
    `.env.${NODE_ENV}.local`,
    `.env.${NODE_ENV}`,
    '.env'
];

envFiles.forEach(file => {

    dotenv.config({ path: path.resolve(process.cwd(), file) });
});

// configuration schema
const ConfigSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']),
    PORT: z.coerce.number().default(3000),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number().default(5432),
    DB_NAME: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    JWT_SECRET: z.string(),
    LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info')
});

// Validate and parse configuration
const parseConfig = () => {
    try {
        return ConfigSchema.parse(process.env);
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error('❌ Invalid environment variables:');
            error.errors.forEach(err => {
                console.error(`  - ${err.path.join('.')}: ${err.message}`);
            });
            process.exit(1);
        }
        throw error;
    }
};

// typed config object
const config = parseConfig();

export default config;