import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Model from 'ember-data/model';

class Recipe extends Model.extend({
  rev: attr(),
  name: attr('string'),
  url: attr('string'),
  description: attr('string'),

  ingredients: hasMany('ingredient')
}) {
  // normal TS class work here
}

namespace Recipe {
  // export let name: string
  // export let url: string
  // export let description: string
  type name = string
  type url = string
  type description = string

  type values = name | url | description;
}

export default Recipe;

declare module "ember-data" {
  interface ModelRegistry {
    recipe: Recipe;
  }
}
