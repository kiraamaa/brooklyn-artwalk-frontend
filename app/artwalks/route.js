import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('artwalk');
  },
});

// export default Ember.Route.extend({
//   model () {
//     return this.get('store').findAll('artwalk');
//   },
//   actions: {
//     editArtwalk (artwalk) {
//       console.log("inside artwalks route, artwalk is ", artwalk);
//       this.transitionTo('artwalk/edit', artwalk);
//     },
//     deleteArtwalk (artwalk) {
//       artwalk.destroyRecord();
//     },
//   },
// });

// let artwalks = [{
//   // id: 1,
//   title: 'Cool walk'
// }, {
//   // id: 2,
//   title: 'Other walk'
// }, {
//   // id: 3,
//   title: 'Downtown walk'
// }];
//
// export default Ember.Route.extend({
//   model() {
//     return artwalks;
//   },
// });
