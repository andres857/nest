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
  constructor(private UsersService: UsersService) {}
  @Get()
  getUsers() {
    const users = this.UsersService.findAll();
    return {
      users,
    };
  }
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    const user = this.UsersService.findOne(id);
    return {
      data: user,
    };
  }
  @Post()
  create(@Body() payload: CreateUserDto) {
    const newUser = this.UsersService.create(payload);
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
    const user = this.UsersService.update(id, payload);
    return {
      message: 'user Updated',
      data: user,
    };
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    const userDeleted = this.UsersService.delete(id);
    return {
      message: 'User delete',
      data: userDeleted,
    };
  }
}
