import Controller from '@ember/controller';
import RSVP from 'rsvp';
import Ingredient from 'recipes/models/ingredient';
import Recipe from 'recipes/models/recipe';

export default class RecipeCreate extends Controller {
  actions = {
    async save(this: RecipeCreate, recipe: Recipe, ingredients: Ingredient[]) {
      await recipe.save();

      const promises = ingredients.map(ingredient => {
        return ingredient.save();
      });

      const ingredientModels = await RSVP.all(promises);
      recipe.get('ingredients').addObjects(ingredientModels);

      await recipe.save();

      this.transitionToRoute('recipes.detail', recipe.get('id'));
    }
  }
}

declare module '@ember/controller' {
  interface ControllerRegistry {
    recipeCreate: RecipeCreate;
  }
}
