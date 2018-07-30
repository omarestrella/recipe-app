import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import Ingredient from 'recipes/models/ingredient';
import { MeasurementType, typeString } from 'recipes/utils/measurements';

export default class NewRecipeForm extends Component.extend({
  tagName: 'tr'
}) {
  ingredient!: Ingredient

  @computed
  get measurementChoices(): string[] {
    const types = [
      MeasurementType.Teaspoons,
      MeasurementType.Tablespoons,
      MeasurementType.Ounces,
      MeasurementType.Pounds
    ];
    return types.map(typeString);
  }
}
