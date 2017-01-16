import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('white-galleries');
  this.route('brooklyn-cultural');
  // this.route('artwalks');
  this.route('favorites');

  this.route('artwalks');
  this.route('artwalks/new');

  this.route('artwalk', { path: 'artwalks/:artwalk_id' });
  this.route('artwalk/edit', { path: 'artwalks/:artwalk_id/edit' });
});

export default Router;
