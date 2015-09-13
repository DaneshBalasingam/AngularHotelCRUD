var myApp = angular.module('myApp', [
  'ngRoute',
  'hotelControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
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
  otherwise({
    redirectTo: '/'
  });
}]);

/*angular.module('myApp.hotels',['myApp.hotels.controllers']);

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
  otherwise({
    redirectTo: '/'
  });
}]);*/

/*var myApp = angular.module('myApp', [
  'hotelControllers',
  'ui.router'
]);

myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider' , 
    function($stateProvider, $urlRouterProvider, $locationProvider ) {
      $stateProvider.state('/hotels', {
        url: '/hotels',
        templateUrl: 'modules/hotels/views/hotels.html',
        controller: 'ListHotelController'
      }).
      state('hotels', {
        url: '/hotels/:itemId',
        templateUrl: 'modules/hotels/views/singleHotel.html',
        controller: 'SingleHotelController'
      });
      $urlRouterProvider.otherwise('/hotels');
}]);*/