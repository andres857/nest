import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { BrandsService } from '../services/brands.service';

// define the route
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}
  @Get()
  getBrands() {
    const brands = this.brandsService.findAll();
    return {
      brands,
    };
  }
  @Get(':id')
  getBrand(@Param('id', ParseIntPipe) id: number) {
    const brand = this.brandsService.findOne(id);
    return {
      brand,
    };
  }
  @Post()
  newBrand(@Body() payload: CreateBrandDto) {
    const newBrand = this.brandsService.create(payload);
    return newBrand;
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    const brandupdated = this.brandsService.update(id, payload);
    return brandupdated;
  }
  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) id: number) {
    const deletedBrand = this.brandsService.delete(id);
    return deletedBrand;
  }
}
