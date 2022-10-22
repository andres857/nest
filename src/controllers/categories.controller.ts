import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoryService) {}
  @Get()
  getCategories() {
    const categories = this.categoryService.findAll();
    return {
      categories,
    };
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const categoryFound = this.categoryService.findOne(id);
    return {
      message: 'Category found',
      data: categoryFound,
    };
  }
  @Post()
  create(@Body() payload: CreateCategoryDto) {
    const newCategory = this.categoryService.create(payload);
    return {
      message: 'category created',
      data: {
        newCategory,
      },
    };
  }
  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    const upCategory = this.categoryService.update(id, payload);
    return {
      message: 'category found',
      data: upCategory,
    };
  }
  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    const categoryDelete = this.categoryService.delete(id);
    return {
      message: 'category delete',
      data: categoryDelete,
    };
  }
}
