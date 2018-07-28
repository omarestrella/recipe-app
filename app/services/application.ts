import Service from '@ember/service';
import Env from '../config/environment';

export default class Application extends Service {
  developmentMode: boolean = Env.environment === 'development'
}

declare module '@ember/service' {
  interface ServiceRegistry {
    application: Application;
  }
}
