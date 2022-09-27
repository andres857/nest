import { Injectable } from '@nestjs/common';
import { Customer } from '../../entities/customer.entity';

@Injectable()
export class CustomersService {
  private countId = 0;
  private customers: Customer[] = [
    {
      id: 0,
      name: 'windowschannel',
      phone: 3007566519,
      url: 'windowschannel.com',
    },
  ];
  create(data) {
    this.countId = this.countId + 1;
    const newClient = {
      id: this.countId,
      ...data,
    };
    this.customers.push(newClient);
    return this.customers[this.countId];
  }
  findAll() {
    return this.customers;
  }
  findOne(id) {
    const found = this.customers.find((item) => item.id === id);
    if (!found) {
      throw new Error('Error simulado');
    }
    return found;
  }
  update(id, data) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Error simulado');
    }
    const client = this.customers[index];
    this.customers[index] = {
      ...client,
      ...data,
    };
    return this.customers[index];
  }
  delete(id) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Error simulado');
    }
    const clientDeleted = this.customers[index];
    this.customers.splice(index, 1);
    return clientDeleted;
  }
}
