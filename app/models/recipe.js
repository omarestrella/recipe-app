import attr from 'ember-data/attr';
import { Model } from 'ember-pouch';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  url: attr(),
  description: attr(),

  ingredients: hasMany('ingredient')
});
