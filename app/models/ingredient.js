import attr from 'ember-data/attr';
import { Model } from 'ember-pouch';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  number: attr(),
  name: attr(),
  measure: attr(),

  recipe: belongsTo('recipe')
});
