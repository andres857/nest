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

@Controller('brands')
export class BrandsController {
  constructor(private BrandsService: BrandsService) {}
  @Get()
  getBrands() {
    const brands = this.BrandsService.findAll();
    return {
      brands,
    };
  }
  @Get(':id')
  getBrand(@Param('id', ParseIntPipe) id: number) {
    const brand = this.BrandsService.findOne(id);
    return {
      brand,
    };
  }
  @Post()
  newBrand(@Body() payload: CreateBrandDto) {
    const newBrand = this.BrandsService.create(payload);
    return newBrand;
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    const brandupdated = this.BrandsService.update(id, payload);
    return brandupdated;
  }
  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) id: number) {
    const deletedBrand = this.BrandsService.delete(id);
    return deletedBrand;
  }
}
