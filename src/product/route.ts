import { Router } from 'express';
import ProductController from './Controller';

export default class ProductRoute {
    private controller: ProductController;
    private router: Router;

    constructor() {
        this.controller = new ProductController();
        this.router = Router();
        this.init()
    }

    getRoutes() {
        return this.router;
    }

    private init(): void {

        this.router.get('/:id', this.controller.getById.bind(this.controller));
        this.router.put('/:id', this.controller.put.bind(this.controller));
        this.router.delete('/:id', this.controller.deleteOne.bind(this.controller));
        this.router.get('/', this.controller.get.bind(this.controller));
        this.router.post('/', this.controller.post.bind(this.controller));

    }
}