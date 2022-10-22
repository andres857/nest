import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/users.dto';
import { UpdateProductDto } from 'src/dtos/products.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    const users = this.usersService.findAll();
    return {
      users,
    };
  }
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.findOne(id);
    return {
      data: user,
    };
  }
  @Post()
  create(@Body() payload: CreateUserDto) {
    const newUser = this.usersService.create(payload);
    return {
      message: 'create user',
      data: newUser,
    };
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    const user = this.usersService.update(id, payload);
    return {
      message: 'user Updated',
      data: user,
    };
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    const userDeleted = this.usersService.delete(id);
    return {
      message: 'User delete',
      data: userDeleted,
    };
  }
}
