import Ember from 'ember';

export default Ember.Controller.extend({
  // var greenIcon = new L.Icon({
  //   iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  //   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  //   iconSize: [25, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  //   shadowSize: [41, 41]
  // });
  //
  // L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

  lat: 40.722885,
  lng: -73.940452,
  zoom: 12,

  restaurants: Ember.A([
    {
      name: 'Real Fine Arts',
      image: 'https://news.artnet.com/app/news-upload/2015/03/IMG_8840.jpg',
      description: 'This Greenpoint gallery was founded by Tyler Dobson and Ben Morgan-Cleveland in 2008 as a place where they could stage art-related activities for themselves and their friends. The gallery works closely with Yuji Agematsu, Nicolas Ceccaldi, Jana Euler, New Museum Triennialist Lena Henke (see The New Museum Triennial Offer a Dazzling and Dystopian Vision of the Future), Mathieu Malouf, and Sam Pulitzer, among others.',
      lat: 40.722885,
      lng: -73.940452
    },
    {
      name: 'Clearing',
      rating: 3.8,
      lat: 40.707463,
      lng: -73.932686,
    },
    // {
    //   name: 'Le Pigeon',
    //   rating: 4.5,
    //   lat: 45.522752,
    //   lng: -122.657979,
    //   isOpen: true
    // },
  ]),

  dangerZone: Ember.computed('restaurants.@each.lat', 'restaurants.@each.lng', function() {
    return this.get('restaurants').map(r => ({lat: r.lat, lng: r.lng}));
  }),

  actions: {
    updateLocation(r, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(r, {
        lat: location.lat,
        lng: location.lng
      });
    }
  }

});
