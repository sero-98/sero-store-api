import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `
      orders limit=> ${limit}; <br/>
      offset=>${offset}; <br/>
     `;
  }

  @Get(':id')
  getOne(@Param('id') orderId: string) {
    return `order ${orderId}`;
  }

  @Post('')
  create(@Body() payload: any) {
    return {
      msg: 'Add a new order',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      msg: 'update method',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Delete method',
      id,
    };
  }
}
