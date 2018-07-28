import Controller from '@ember/controller';
import RSVP from 'rsvp';
import Recipe from '../../models/recipe';

export default class RecipeDetail extends Controller {
  actions = {
    async delete(this: RecipeDetail, recipe: Recipe) {
      const ingredients = await recipe.get('ingredients');
      await RSVP.all(ingredients.map(ingredient => ingredient.destroyRecord()));

      await recipe.destroyRecord();

      this.transitionToRoute('recipes');
    }
  }
}

declare module '@ember/controller' {
  interface ControllerRegistry {
    recipeDetail: RecipeDetail;
  }
}
