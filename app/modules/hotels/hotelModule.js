angular.module('myApp.hotels',['ngRoute', 'ngResource', 'myApp.hotels.controllers', 
               'myApp.hotels.directives','myApp.hotels.services','myApp.hotels.filters']);

angular.module('myApp.hotels').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/hotels', {
    templateUrl: 'modules/hotels/views/hotels.html',
    controller: 'ListHotelController'
  }).
  when('/hotels/:hotelId', {
    templateUrl: 'modules/hotels/views/singleHotel.html',
    controller: 'SingleHotelController'
  }).
  when('/createHotel', {
    templateUrl: 'modules/hotels/views/createHotel.html',
    controller: 'CreateHotelController'
  }).
  when('/adminHotel', {
    templateUrl: 'modules/hotels/views/adminHotel.html',
    controller: 'AdminHotelController'
  }).
  when('/updateHotel/:hotelId', {
    templateUrl: 'modules/hotels/views/updateHotel.html',
    controller: 'UpdateHotelController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);

