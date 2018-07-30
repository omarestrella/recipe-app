import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}

  type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T
  }
}



export {};
