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
  otherwise({
    redirectTo: '/'
  });
}]);

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