import { Router } from 'express';
import ProductRoute from '../../product/Route';

export default class BaseRoute {
    private router: Router;
    private productRoute: ProductRoute
    constructor() {
        this.productRoute = new ProductRoute();
        this.router = Router();
        this.init()
    }

    getRoutes(): Router {
        return this.router;
    }

    private init(): void {

        this.router.use('/product', this.productRoute.getRoutes());

    }
}