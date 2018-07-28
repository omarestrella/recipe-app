import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default class Ingredient extends Model.extend({
  rev: attr(),
  number: attr(),
  name: attr(),
  measure: attr(),

  recipe: belongsTo('recipe')
}) {

}

declare module 'ember-data' {
  interface ModelRegistry {
    ingredient: Ingredient;
  }
}
