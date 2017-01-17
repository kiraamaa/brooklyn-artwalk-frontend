import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('favorite', {});
  },
  actions: {
    createFavorite (favorite) {
      console.log("inside favorites/new route createFavorite");
      favorite.save();
      this.transitionTo('favorites');
    },
    cancelCreateFavorite (favorite) {
      console.log("inside favorites/new route cancel");
      favorite.rollbackAttributes();
      this.transitionTo('favorites');
    },
  }
});
