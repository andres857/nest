import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers(@Query('limit') limit = 10, @Query('offset') offset = 5) {
    return `Route Orders limit: ${limit} offset: ${offset}`;
  }
  @Get(':id')
  getCustomer(@Param('id') id: string) {
    return id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'client created',
      data: payload,
    };
  }
}
