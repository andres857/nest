import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/:id')
  getProducts(@Param('id') id: string) {
    console.log(typeof id);
    return `product ${id}`;
  }

  @Get('')
  paginationProducts(@Query('limit') limit = 20, @Query('offset') offset = 20) {
    return `Route products limit:${limit} offset:${offset}`;
  }
}
