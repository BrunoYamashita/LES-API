import { default as Product, ProductModel } from './Model';
import { BaseRepository } from '../base/BaseRepository';
import { Model, Document } from 'mongoose';

export class ProductRepository extends BaseRepository<Document> {

    constructor(model: Model<Document>){
        super(model)
    }
    // specific querys
}
