import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return `{
      list users
    }`;
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
