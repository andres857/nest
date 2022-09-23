import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query('limit') limit = 20, @Query('offset') offset = 10) {
    return `Route Orders limit: ${limit} offset: ${offset}`;
  }
  @Get(':id')
  getOrder(@Param('id') id: string) {
    return id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'order created',
      data: payload,
    };
  }
}
