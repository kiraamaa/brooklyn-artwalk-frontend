import DS from 'ember-data';

export default DS.Model.extend({
  // artwalkId: DS.attr('integer'),
  title: DS.attr('string')
});

// export default DS.Model.extend({
//   title: DS.attr('string'),
//   hidden: DS.attr('boolean'),
//   items: DS.hasMany('item'),
// });
