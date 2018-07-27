import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  application: inject(),

  currentRouteClass: computed('currentRouteName', function () {
    return this.get('currentRouteName').replace(/\./i, '-');
  })
});
