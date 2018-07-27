import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

const db = new PouchDB('local');

export default Adapter.extend({
  db: db
});
