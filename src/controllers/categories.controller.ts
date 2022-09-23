import { Controller, Get, Param, Post, Body, HttpCode } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `the id of product is ${productId} of category ${id}`;
  }
  @Post()
  @HttpCode(202)
  create(@Body() payload: any) {
    return {
      message: 'category created',
      data: {
        payload,
      },
    };
  }
}
