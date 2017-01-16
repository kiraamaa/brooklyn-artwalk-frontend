import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('artwalk', {});
  },
  actions: {
    createArtwalk (artwalk) {
      console.log("inside artwalks/new route createArtwalk");
      artwalk.save();
      this.transitionTo('artwalks');
    },
    cancelCreateArtwalk (artwalk) {
      console.log("inside artwalks/new route cancel");
      artwalk.rollbackAttributes();
      this.transitionTo('artwalks');
    },
  }
});
