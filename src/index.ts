import "reflect-metadata";
import express = require('express');
import {urlencoded} from "express";
import cookieParser from "cookie-parser";
import config from './config';
import {dataSourceOptions} from "./database/typeorm.config";
import {DataSource} from "typeorm";
import {User} from "./database/entities/user.entity";
import {createUserRoutes} from "./routes/user.routes";
import {ServiceFactory} from "./services/service.factory";


async function bootstrap() {
    const app = express();
    const appDataSource = new DataSource(dataSourceOptions);

    try {
        await appDataSource.initialize();
        console.log("Database connected");

        // Create service factory
        const serviceFactory = new ServiceFactory(appDataSource);

        // Middleware
        app.use(express.json());
        app.use(cookieParser());
        app.use(urlencoded({ extended: false }));

        // Routes with dependency injection
        app.use('/api/v1/users', createUserRoutes(serviceFactory));
        //app.use('/api/v1/notes', createNoteRoutes(serviceFactory));

        app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });

    } catch (error: any) {
        console.error("Initialization error", error);
        process.exit(1);
    }
}

bootstrap();