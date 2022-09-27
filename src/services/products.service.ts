import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 0;
  private products: Product[] = [
    {
      id: 0,
      name: 'pro 1',
      description: 'iam description',
      image: 'https://google.com',
      price: 122,
      stock: 10,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`product with ${id} not found`);
    } else {
      return product;
    }
  }
  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return this.products[this.counterId];
  }
  update(id: number, data: UpdateProductDto) {
    const index = this.products.findIndex((item) => item.id === id);
    console.log(`${index} ------`);
    if (index === -1) {
      throw new NotFoundException();
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...data,
    };
    return this.products[index];
  }
  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    console.log(index);

    if (index === -1) {
      throw new NotFoundException();
    }
    const deleteProduct = this.products[index];
    this.products.splice(index, 1);
    return deleteProduct;
  }
}
