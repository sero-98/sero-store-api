import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      stock: 12,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
      //return product;
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((p) => p.id === id);
      this.products[index] = {
        id: id,
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((p) => p.id === id);
      this.products.splice(index, 1);
      return 'product deleted';
    }
    return null;
  }
}
