import { Controller, Get } from '@nestjs/common';

/**Primero el servicio se tiene que importar, dado que está definido en otro archivo "ts". */
import { AppService } from './app.service';

/**
 * Este es nuestro primer controlador de aplicación. Como quizás sepas de otros frameworks, los controladores son las piezas de software que se encargan de gestionar las solicitudes, realizando todo el trabajo necesario para gestionar el request y componer la respuesta.
 */

@Controller()
export class AppController {
  /**Luego, el servicio se inyecta mediante el constructor del controlador y se almacena como una propiedad privada al construir los objetos controller. */
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

/**
 * Como puedes ver, el controlador es una clase, en la que colocamos el decorador @Controller. En el código de la clase observarás que tenemos un método, precedido de otro decorador @Get, que es el que se encarga de gestionar una solicitud (request de tipo GET). Esa, de momento, es la única ruta que se podrá atender en nuestra aplicación.
 */
