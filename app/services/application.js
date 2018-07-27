import Service from '@ember/service';
import Env from '../config/environment';

export default Service.extend({
  developmentMode: Env.environment === 'development'
});
