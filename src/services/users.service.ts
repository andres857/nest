import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
@Injectable()
export class UsersService {
  private count = 0;
  private users: User[] = [
    {
      id: 0,
      name: 'andres',
      phone: '3007566519',
      email: 'andres@gmail.com',
    },
  ];

  create(data: CreateUserDto) {
    this.count = this.count + 1;
    const newUser = {
      id: this.count,
      ...data,
    };
    this.users.push(newUser);
    return this.users[this.count];
  }
  findAll() {
    return this.users;
  }
  findOne(id: number) {
    const found = this.users.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }
  update(id: number, data: UpdateUserDto) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }
    const userfound = this.users[index];
    this.users[index] = {
      ...userfound,
      ...data,
    };
    return this.users[index];
  }
  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }
    const userfound = this.users[index];
    this.users.splice(index, 1);
    return userfound;
  }
}
