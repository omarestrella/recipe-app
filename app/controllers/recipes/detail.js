import Controller from '@ember/controller';
import RSVP from 'rsvp';

export default Controller.extend({
  actions: {
    async delete(recipe) {
      const ingredients = await recipe.get('ingredients');
      await RSVP.all(ingredients.map(ingredient => ingredient.destroyRecord()));

      await recipe.destroyRecord();

      this.transitionToRoute('recipes');
    }
  }
});
