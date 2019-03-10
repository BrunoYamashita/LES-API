import { default as Product, ProductModel } from './Model';
import { ProductRepository } from './Repository';

export class ProductService {
  private repository: ProductRepository;

  constructor(){
    this.repository = new ProductRepository(Product)
  }

  async find() {
    return await this.repository.find();
  }

  async create(){
    const product = new Product({title: 'a',
      user: 'a',
      yearPublished: 'a',
      price: 1,
      rating: 1});
    return await this.repository.create(product)
  }

}
