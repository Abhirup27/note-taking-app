import {authenticate} from "../middlewares/authMiddleware";

const router = require('express').Router();



import { ServiceFactory } from "../services/service.factory";
import { UserController } from "../controllers/user.controller";

export function createUserRoutes(serviceFactory: ServiceFactory) {
    const userController = new UserController(serviceFactory);

    router.get('/', authenticate,userController.getUser.bind(userController));

    return router;
}