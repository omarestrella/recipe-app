import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  ingredients: null,

  save: () => {},

  actions: {
    addIngredient() {
      this.get('ingredients').pushObject({});
    },

    updateProperty(name, event) {
      set(this.form, name, event.target.value);
    },

    save() {
      this.get('save')(this.form, this.ingredients);
    }
  },

  init() {
    this._super(...arguments);

    this.set('ingredients', []);
    this.set('form', {});
  },

  didInsertElement() {
    this._super(...arguments);

    this.$('input:first').focus();
  }
});
