import {   
    Request,
    Response,
    NextFunction
} from "express";

export interface IBaseController {
    get(req: Request, res: Response, next: NextFunction): void;
    getById(req: Request, res: Response, next: NextFunction): void;
    put(req: Request, res: Response, next: NextFunction): void;
    post(req: Request, res: Response, next: NextFunction): void;
    deleteOne(req: Request, res: Response, next: NextFunction): void;
}