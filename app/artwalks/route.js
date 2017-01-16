import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('artwalk');
  },
  actions: {
    editArtwalk (artwalk) {
      console.log("inside artwalks route, artwalk is ", artwalk);
      this.transitionTo('artwalk/edit', artwalk);
    },
    deleteArtwalk (artwalk) {
      artwalk.destroyRecord();
    },
  },
});
