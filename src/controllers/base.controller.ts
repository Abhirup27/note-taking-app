// src/controllers/base.controller.ts
import { ServiceFactory } from "../services/service.factory";

export abstract class BaseController {
    protected serviceFactory: ServiceFactory;

    constructor(serviceFactory: ServiceFactory) {
        this.serviceFactory = serviceFactory;
    }
}