import Ember from 'ember';

export enum MeasurementType {
  Ounces,
  Pounds,

  Teaspoons,
  Tablespoons
}

export function typeString(type: MeasurementType) {
  switch (type) {
    case MeasurementType.Ounces:
      return 'oz';
    case MeasurementType.Pounds:
      return 'lbs';
    case MeasurementType.Teaspoons:
      return 'tsp';
    case MeasurementType.Tablespoons:
      return 'tbsp';
    default:
      Ember.Logger.error('Type not supported:', { type })
      return 'unknown';
  }
}
