import {Request, Response} from 'express';
import {User} from "../database/entities/user.entity";
import {UserService} from "../services/user.service";
import ex from "../types/express"
import {BaseController} from "./base.controller";

export class UserController extends BaseController {
    private get userService(): UserService {
        return this.serviceFactory.createUserService();
    }

    async getUser(req: Request, res: Response) {
        try {
            console.log(req.user);
            const user = await this.userService.getUsers();
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}