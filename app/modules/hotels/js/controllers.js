'use strict'

var hotelControllers = angular.module('hotelControllers',[]);

hotelControllers.controller('ListHotelController', ['$scope', '$http', function($scope, $http) {

  $http.get('backend/hotels_facade.php').success(function(data) {
    $scope.hotels = data;
    $scope.hotelOrder = 'name';
  });
}]);

hotelControllers.controller('SingleHotelController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('backend/hotels_facade.php').success(function(data) {
    $scope.hotels = data;
    $scope.currItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.hotels.length-1;
    }

    if ($routeParams.itemId < $scope.hotels.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

hotelControllers.controller('CreateHotelController', ['$scope', '$http', function($scope, $http ) {


    $scope.saveHotel=function(){
        if( $scope.hotelForm.$valid) {

           console.log($scope.hotelForm.excerpt);
        
        } else {
        console.log('unable to save. Validation error');
        }       
    }  
  
}]);

 /* hotelControllers.controller('ListHotelController', ['$scope', '$http', '$location', '$state' , 
    function($scope, $http, $location, $state) {

        $http.get('backend/hotels.php').success(function(data) {
          $state.go('hotels', {
            $scope.hotels = data;
            $scope.hotelOrder = 'name';
          });
        
    });
  }]);*/