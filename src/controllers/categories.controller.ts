import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categorieService: CategoriesService) {}

  @Get('')
  getAll() {
    return this.categorieService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) categoryId: number) {
    return this.categorieService.findOne(categoryId);
  }

  @Post('')
  create(@Body() payload: CreateCategoryDto) {
    return this.categorieService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categorieService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categorieService.delete(id);
  }

  @Get('/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product: ${productId} and categories: ${id}`;
  }
}
