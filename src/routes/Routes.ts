import { Router } from 'express';
import BaseRoute from './v1/Route';

export default class Route {
    private router: Router;
    private baseRoute: BaseRoute
    constructor() {
        this.baseRoute = new BaseRoute();
        this.router = Router();
        this.init()
    }

    getRoutes(): Router {
        return this.router;
    }

    private init(): void {
        this.router.use('/v1', this.baseRoute.getRoutes());
    }
}