import { Injectable } from '@nestjs/common';
import { Product } from 'entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'pro 1',
      description: 'iam description',
      image: 'https://google.com',
      price: 122,
      stock: 10,
    },
  ];
  findAll() {
    console.log('aaa');

    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return this.products[this.counterId];
  }
}
