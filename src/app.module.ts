import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandsController } from './controllers/brands.controller';
import { UsersController } from './controllers/users.controller';
import { CostumersController } from './controllers/costumers.controller';
import { OrdersController } from './controllers/orders.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { CustomersService } from './services/customers.service';
import { BrandsService } from './services/brands.service';
import { UsersService } from './services/users.service';

/**
 * Es una clase, de Programación orientada a objetos, que observarás que no tiene ningún código en especial. Sin embargo está precedida de un decorador @module, que es el que hace que esta clase se comporte como un módulo de aplicación.
 */

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    UsersController,
    CostumersController,
    OrdersController,
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    CustomersService,
    BrandsService,
    UsersService,
  ],
})
export class AppModule {}

/**
 * En el decorador @module se coloca toda la configuración del módulo. Observarás   que se declara un controlador (propiedad "controllers") y un servicio (propiedad "providers"), que son otros de los dos archivos que se importan en esta clase y que también se encuentran en la carpeta src.
 */

/**
 * Básicamente los decoradores los podemos colocar antes de alguna estructura de código, como una clase, un método o atributo, y lo que permiten es colocar metadatos que sirven para configurar ese elemento que está siendo decorado.
 */
