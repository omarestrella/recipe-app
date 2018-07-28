import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Model from 'ember-data/model';

export default class Recipe extends Model.extend({
  rev: attr(),
  name: attr(),
  url: attr(),
  description: attr(),

  ingredients: hasMany('ingredient')
}) {
  // normal TS class work here
}

declare module "ember-data" {
  interface ModelRegistry {
    recipe: Recipe;
  }
}
