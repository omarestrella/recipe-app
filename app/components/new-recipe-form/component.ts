import Component from '@ember/component';
import { service } from '@ember-decorators/service';
import Store from 'ember-data/store';
import Ingredient from 'recipes/models/ingredient';
import Recipe from 'recipes/models/recipe';

export default class NewRecipeForm extends Component {
  @service store!: Store

  ingredients: Ingredient[]
  recipe: Recipe

  save!: (recipe: Recipe, ingredients: Ingredient[]) => void

  actions = {
    addIngredient(this: NewRecipeForm) {
      const ingredient = this.store.createRecord('ingredient', {});
      this.get('ingredients').pushObject(ingredient);
    },

    updateProperty(this: NewRecipeForm, name:  , event: HTMLElementEvent<HTMLInputElement>) {
      this.recipe.set(name, event.target.value);
    },

    save(this: NewRecipeForm) {
      this.get('save')(this.recipe, this.ingredients);
    }
  }

  constructor() {
    super();

    this.recipe = this.store.createRecord('recipe', {});
    this.ingredients = [];
  }

  didInsertElement() {
    this._super(...arguments);

    this.$('input:first').focus();
  }
}
