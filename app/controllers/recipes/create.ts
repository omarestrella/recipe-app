import Controller from '@ember/controller';
import RSVP from 'rsvp';

export default class RecipeCreate extends Controller {
  actions = {
      async save(this: RecipeCreate, recipe: object, ingredients: object[]) {
        const recipeModel = this.store.createRecord('recipe', recipe);

        await recipeModel.save();

        const promises = ingredients.map(ingredient => {
          return this.store.createRecord('ingredient', ingredient).save();
        });

        const ingredientModels = await RSVP.all(promises);
        recipeModel.get('ingredients').addObjects(ingredientModels);

        await recipeModel.save();

        this.transitionToRoute('recipes.detail', recipeModel.get('id'));
      }
    }
}

declare module '@ember/controller' {
  interface ControllerRegistry {
    recipeCreate: RecipeCreate;
  }
}
