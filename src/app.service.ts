import { Injectable } from '@nestjs/common';

/**
 * Este es el servicio que usaba el controlador. El servicio nuevamente es una clase, aunque en este caso el concepto de servicio está un poco infrautilizado, ya que tiene un simple método que devuelve una cadena. Ese método es getHello(), el que se invocó desde el controlador.
 */

/**
 * Lo interesante de este servicio es que está decorado con @injectable(). Básicamente este decorador permite que este servicio se pueda enviar al constructor de los controladores, mediante la inyección de dependencias que nos ofrece NestJS.
 */

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
