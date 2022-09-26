import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  // ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getproducts() {
    const products = this.productsService.findAll();
    return {
      products,
    };
  }

  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    const product = this.productsService.findOne(id);
    return {
      product,
    };
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    const newProduct = this.productsService.create(payload);
    return {
      message: 'product created',
      data: newProduct,
    };
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    const updateProduct = this.productsService.update(id, payload);
    return {
      message: 'product Updated',
      data: {
        idProduct: id,
        data: updateProduct,
      },
    };
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    const dp = this.productsService.delete(id);
    return {
      message: 'product delete',
      data: dp,
    };
  }
}
