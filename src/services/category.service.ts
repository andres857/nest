import { Injectable } from '@nestjs/common';
import { Category } from '../../entities/category.entity';

@Injectable()
export class CategoryService {
  private countId = 0;
  private categories: Category[] = [
    {
      id: 0,
      name: 'tecnologia',
    },
  ];
  create(data) {
    this.countId = this.countId + 1;
    const newCategory = {
      id: this.countId,
      ...data,
    };
    this.categories.push(newCategory);
    return this.categories[this.countId];
  }
  findAll() {
    return this.categories;
  }
  findOne(id) {
    const found = this.categories.find((item) => item.id === id);
    if (!found) {
      throw new Error('Category not Found');
    }
    return found;
  }
  update(id, data) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Category not Found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...data,
    };
    return this.categories[index];
  }
  delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Category not Found');
    }
    const categoryDelete = this.categories[index];
    this.categories.splice(index, 1);
    return categoryDelete;
  }
}
