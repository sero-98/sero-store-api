import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;

  private customers: Customer[] = [
    {
      id: 1,
      name: 'Roger',
      lastName: 'Cabanillas',
      phone: '123456789',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((p) => p.id === id);

    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
      //return product;
    }

    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId++;

    const newCustomer = {
      id: this.counterId,
      ...payload,
    };

    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.customers.findIndex((p) => p.id === id);
      this.customers[index] = {
        id: id,
        ...customer,
        ...payload,
      };
      return this.customers[index];
    }
    return null;
  }

  delete(id: number) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.customers.findIndex((p) => p.id === id);
      this.customers.splice(index, 1);
      return 'Customer deleted';
    }
    return null;
  }
}
