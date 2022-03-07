import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //va a oviar todos los parametros que no esten en el dto
      forbidNonWhitelisted: true, //va botar error sobre lo anterior
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('SERO STORE')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();

  await app.listen(process.env.PORT || 3005);
}
bootstrap();
