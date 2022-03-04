import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  //ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('')
  getAll(
    @Query('limit') limit = 100, // atributo por defecto e inferido
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    /*return `
      products limit=> ${limit}; <br/>
      offset=>${offset}; <br/>
      brand=> ${brand}
     `;*/
    return this.productService.findAll();
  }

  @Get('filter')
  getFilter() {
    return `Yo soy un filter`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
