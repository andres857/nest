import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';

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
  getUser(@Param('id') id: string) {
    return id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create user',
      data: {
        payload,
      },
    };
  }
}
