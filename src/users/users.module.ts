import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { CostumersController } from './controllers/costumers.controller';
import { UsersController } from './controllers/users.controller';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [ProductsModule],
  controllers: [CostumersController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
