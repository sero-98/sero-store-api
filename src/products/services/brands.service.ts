import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;

  private brands: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
      image: '',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((p) => p.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
      //return product;
    }

    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId++;

    const newBrand = {
      id: this.counterId,
      ...payload,
    };

    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (brand) {
      const index = this.brands.findIndex((p) => p.id === id);
      this.brands[index] = {
        id: id,
        ...brand,
        ...payload,
      };
      return this.brands[index];
    }
    return null;
  }

  delete(id: number) {
    const brand = this.findOne(id);
    if (brand) {
      const index = this.brands.findIndex((p) => p.id === id);
      this.brands.splice(index, 1);
      return 'Brand deleted';
    }
    return null;
  }
}
