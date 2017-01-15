import Ember from 'ember';

export default Ember.Component.extend({
  newPoint: {
    content: null,
    done: false,
  },
  classNames: ['artwalk'],
  classNameBindings: ['artwalkDetailHidden'],
  artwalkDetailHidden: false,
  actions: {
    toggleArtwalkDetail () {
      return this.toggleProperty('artwalkDetailHidden');
    },
    togglePoint (point) {
      console.log("you're inside togglePoint");
      this.sendAction('togglePoint', point);
    },
    deletePoint (point) {
      this.sendAction('deletePoint', point);
    },
    createPoint () {
      // console.log("inside createPoint", this.get('newPoint'));
      // this.sendAction('createPoint', this.get('newPoint'));
      console.log("inside createPoint, this.get(newPoint) is ", this.get('newPoint'));
      let data = this.get('newPoint');
      data.point = this.get('point');
      this.sendAction('createPoint', data);
    },
  },
});
