import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('productss')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getproducts() {
    console.log('route');
    let p = 'kjajaja';

    // const products = this.productsService.findAll();
    // return {
    //   products,
    // };
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    const product = this.productsService.findOne(id);
    return {
      product,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'product created',
      data: payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'product updated',
      data: {
        idProduct: id,
        data: payload,
      },
    };
  }
}
