import { Module, Global } from '@nestjs/common';

const API_KEY_DEV = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY', // Nombre con el que se hara referencia
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY_DEV, // El valor
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
