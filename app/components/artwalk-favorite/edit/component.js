import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      this.sendAction('save', this.get('favorite'));
    },
    cancel () {
      this.sendAction('cancel', this.get('favorite'));
    },
  //   willTransition () {
  //    let store = this.get('store');
  //    store.peekAll('artwalk').forEach(function (artwalk) {
  //      if (artwalk.get('isNew') && artwalk.get('hasDirtyAttributes')) {
  //        artwalk.rollbackAttributes();
  //      }
  //    });
  //    return true;
  //  },
  }
});
