import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';

@Injectable()
export class CategoriesService {
  private counterId = 1;

  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((p) => p.id === id);

    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
      //return category;
    }

    return category;
  }

  create(payload: CreateCategoryDto) {
    this.counterId++;

    const newCategory = {
      id: this.counterId,
      ...payload,
    };

    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    if (category) {
      const index = this.categories.findIndex((p) => p.id === id);
      this.categories[index] = {
        id: id,
        ...category,
        ...payload,
      };
      return this.categories[index];
    }
    return null;
  }

  delete(id: number) {
    const category = this.findOne(id);
    if (category) {
      const index = this.categories.findIndex((p) => p.id === id);
      this.categories.splice(index, 1);
      return 'category deleted';
    }
    return null;
  }
}
