import { IWrite } from './interfaces/IWrite';
import { IRead } from './interfaces/IRead';
import mongoose from 'mongoose';
import { Model } from 'mongoose';

// that class only can be extended
export abstract class BaseRepository<type> implements IWrite<mongoose.Document>, IRead<mongoose.Document> {
  private model: Model<mongoose.Document>;

  constructor(model: Model<mongoose.Document>) {
    
    this.model = model
  } 

  async create(item: mongoose.Document): Promise<mongoose.Document> {
   return await this.model.create(item);
  }


  async update(id: string, item: mongoose.Document): Promise<mongoose.Document> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  async find(): Promise<mongoose.Document[]> {
   return await this.model.find();
  }
  async findOne(id: string): Promise<mongoose.Document> {
    throw new Error('Method not implemented.');
  }
}