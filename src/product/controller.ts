import express from "express";
import { Request, Response, NextFunction } from "express"
import * as service from "./service";
const router = express.Router();

/**
 * Get books list
 * @returns Array of books objects filtered by title part
 */
export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const books = await service.find();
    res.json(books);

  } catch (error) {
    next(error);
  }
};

/**
 * Get books by ID
 * @returns Array of books objects
 */
export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const books = await service.findById(id);
    res.json(books);

  } catch (error) {
    next(error);
  }

};

/**
 * Update one book by ID
 * @returns Book updated object
 */
export async function put(req: Request, res: Response, next:NextFunction) {
  try {
    const id = req.params.id;
    const book = req.body;
    const books = await service.update(id, book);
    res.json(book);
  } catch (error) {
    next(error);
  }

};

/**
 * Create one book
 * @returns Book updated object
 */
export async function post(req: Request, res: Response, next: NextFunction) {
  try {
    const book = req.body;
    res.json(await service.create(book));
  } catch (error) {
    next(error);
  }

};

/**
 * Delete one Book by its id
 */
export async function deleteOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const books = await service.deleteOne(id);
    res.json(books);
  } catch (error) {
    next(error);
  }

};
