import express from 'express';
import {
  Request,
  Response,
  NextFunction
} from 'express'
import { IBaseController } from '../base/interfaces/IBaseController';
import { ProductService } from './Service';
const router = express.Router();

export default class ProductController implements IBaseController{

  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }
  /**
   * Get products list
   * @returns Array of products objects filtered by title part
   */
  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.service.find();
      res.json(products);

    } catch (error) {
      next(error);
    }
  };

  public async post(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.service.create();
      res.json(products);

    } catch (error) {
      next(error);
    }
  };

  getById(req: express.Request, res: express.Response, next: express.NextFunction): void {
    throw new Error("Method not implemented.");
  }
  put(req: express.Request, res: express.Response, next: express.NextFunction): void {
    throw new Error("Method not implemented.");
  }
  deleteOne(req: express.Request, res: express.Response, next: express.NextFunction): void {
    throw new Error("Method not implemented.");
  }

}