import { Injectable } from '@nestjs/common';
import { Brand } from '../../entities/brand.entity';

@Injectable()
export class BrandsService {
  private countId = 0;
  private brands: Brand[] = [
    {
      id: 0,
      name: 'lg',
      productsAvailable: 20,
    },
  ];
  create(data) {
    this.countId = this.countId + 1;
    const newBrand = {
      id: this.countId,
      ...data,
    };
    this.brands.push(newBrand);
    return this.brands[this.countId];
  }
  findAll() {
    return this.brands;
  }
  findOne(id) {
    const found = this.brands.find((item) => item.id === id);
    if (!found) {
      throw new Error('brand not Found');
    }
    return found;
  }
  update(id, data) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('brand not Found');
    }
    const brand = this.brands[index];
    this.brands[index] = {
      ...brand,
      ...data,
    };
    return this.brands[index];
  }
  delete(id) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('brand not Found');
    }
    const brandDeleted = this.brands[index];
    this.brands.splice(index, 1);
    return brandDeleted;
  }
}
