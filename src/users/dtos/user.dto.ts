/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
//import { PartialType } from '@nestjs/mapped-types';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: `email's name` }) // 👈
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty() // 👈
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty() // 👈
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
