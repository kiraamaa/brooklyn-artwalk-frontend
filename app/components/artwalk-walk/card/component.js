import Ember from 'ember';

export default Ember.Component.extend({
  // isEmpty: Ember.computed('artwalk', function() {
  //   let items = this.get('artwalk').hasMany('items');
  //   console.log("items is", items);
  //   return items.ids().length === 0;
  // }),
  actions: {
    edit () {
      console.log("inside editWalk in artwalk-walk/card component");
      console.log("the artwalk im clicking edit on is", this.get('artwalk'));
      this.sendAction('edit', this.get('artwalk'));
    },
    delete () {
      this.sendAction('delete', this.get('artwalk'));
    },
  },
});
