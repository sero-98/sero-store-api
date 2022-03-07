/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

//import { PartialType } from '@nestjs/mapped-types';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `product's name` }) // 👈
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty() // 👈
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty() // 👈
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty() // 👈
  readonly stock: number;

  @IsUrl() //valida que sea una url
  @IsNotEmpty()
  @ApiProperty() // 👈
  readonly image: string;
}

/**
 * PartialType
 * coge nuestra dto base y los pone como opcional osea le pone ?
 */
export class UpdateProductDto extends PartialType(CreateProductDto) {}
