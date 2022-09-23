import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query('limit') limit = 10, @Query('offset') offset = 5) {
    return `Route Orders limit: ${limit} offset: ${offset}`;
  }
  @Get(':id')
  getBrand(@Param('id') id: string) {
    return id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'brand created',
      data: {
        payload,
      },
    };
  }
}
