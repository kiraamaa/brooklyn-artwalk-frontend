import Ember from 'ember';

export default Ember.Route.extend({
  model (favorite) {
    console.log(favorite.artwalkId);
    return this.get('store').findAll('favorite');
  },
  // actions: {
  //   editFavorite (favorite) {
  //     console.log("inside favorites route, favorite is ", favorite);
  //     this.transitionTo('favorite/edit', favorite);
  //   },
  //   deleteList (favorite) {
  //     favorite.destroyRecord();
  //   },
  // },
});
