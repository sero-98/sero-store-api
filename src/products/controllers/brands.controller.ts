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

import { BrandsService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandsService) {}

  @Get('')
  getAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) brandId: number) {
    return this.brandService.findOne(brandId);
  }

  @Post('')
  create(@Body() payload: CreateBrandDto) {
    return this.brandService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.delete(id);
  }
}
