import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

/**
 * Este es el archivo que realiza el arranque de la aplicación. Todo comienza en el  * main.ts.
 * Contiene la importación del core de NestJS y el módulo principal de la aplicación * (app.module). Luego realiza el propio arranque de la aplicación con la función
 * bootstrap().
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //va a oviar todos los parametros que no esten en el dto
      forbidNonWhitelisted: true, //va botar error sobre lo anterior
    }),
  );
  await app.listen(3005);
}
bootstrap();
