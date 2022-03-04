import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {
  private counterId = 1;

  private users: User[] = [
    {
      id: 1,
      email: 'user@example',
      password: 'user',
      role: 'user',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((p) => p.id === id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId++;

    const newUser = {
      id: this.counterId,
      ...payload,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((p) => p.id === id);
      this.users[index] = {
        id: id,
        ...user,
        ...payload,
      };
      return this.users[index];
    }
    return null;
  }

  delete(id: number) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((p) => p.id === id);
      this.users.splice(index, 1);
      return 'user deleted';
    }
    return null;
  }
}
