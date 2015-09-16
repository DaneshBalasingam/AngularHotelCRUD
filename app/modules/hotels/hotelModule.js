angular.module('myApp.hotels',['ngRoute', 'myApp.hotels.controllers']);

angular.module('myApp.hotels').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/hotels', {
    templateUrl: 'modules/hotels/views/hotels.html',
    controller: 'ListHotelController'
  }).
  when('/hotels/:itemId', {
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
  when('/updateHotel/:itemId', {
    templateUrl: 'modules/hotels/views/updateHotel.html',
    controller: 'UpdateHotelController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);

