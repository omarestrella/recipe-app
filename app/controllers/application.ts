import Controller from '@ember/controller';
import { service } from '@ember-decorators/service';
import { computed } from '@ember-decorators/object';
import Application from '../services/application';

class ApplicationController extends Controller {
  @service application!: Application

  @computed('currentRouteName')
  get currentRouteClass(this: ApplicationController): string {
    return this.get('currentRouteName').replace(/\./i, '-');
  }
}

interface ApplicationController {
  currentRouteName: string;
}

export default ApplicationController;

declare module '@ember/controller' {
  interface ControllerRegistry {
    application: ApplicationController;
  }
}
