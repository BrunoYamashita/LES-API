import { default as Product, productModel } from "./model";
/**
 * Find books by title part
 * @param {string} title product title part
 * @returns product object less password field
 */
export async function findByTitlePart(title: any) {
  try {
    return await Product.find({'title': {
      '$regex': title,
      '$options': 'i'
    }
  });

  } catch (err) {
    throw err;
  }
}

/**
 * Find books by author name part
 * @param {string} param product title part
 * @returns product object less password field
 */
export async function findByAuthorPart(param: any) {
  try {
    return await Product.find({'user': {
      '$regex': param,
      '$options': 'i'
    }
  });

  } catch (err) {
    throw err;
  }
}

/**
 * Get list of books
 * @returns Array of Product objects
 */
export async function find() {
  try {
    return await Product.find();

  } catch (err) {
    throw err;
  }
}

export async function findById(id: string){
  try {
    return await Product.findById({'_id': id});
  } catch (error) {
    throw error
  }
}

/**
 * Find and update product by its ID
 * @param { ObjectId } id Product mongo ObjectId 
 * @param { Product } product Product Object to be updated
 */
export async function update(id: string, product: productModel) {
  try {

    return await Product.findByIdAndUpdate(id, product);

  } catch (err) {
    throw err;
  }
}

/**
 * Create a product
 * @param { Product } product Product Object to be created
 */
export async function create(product: any) {
  try {
    product = new Product(product);
    return await product.save();

  } catch (err) {
    throw err;
  }
}

/**
 * Delete One product by its ID
 * @param { ObjectId } id Product mongo ObjectId 
 */
export async function deleteOne(id: string) {
  try {
    return await Product.deleteOne({'_id': id});

  } catch (err) {
    throw err;
  }
}