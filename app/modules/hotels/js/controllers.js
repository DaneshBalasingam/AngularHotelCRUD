'use strict'

angular.module('myApp.hotels.controllers',[]);

angular.module('myApp.hotels.controllers').controller('ListHotelController', ['$scope', '$http', function($scope, $http) {

  $http.get('backend/hotels_facade.php').success(function(data) {
    $scope.hotels = data;
    $scope.hotelOrder = 'name';
  });

}]); 

angular.module('myApp.hotels.controllers').controller('AdminHotelController', ['$scope', '$http', '$location',
  function($scope, $http, $location) {

    $http.get('backend/hotels_facade.php').success(function(data) {
      $scope.hotels = data;
    });

    $scope.editHotel=function(hotelId){
      $location.path('/updateHotel/' + hotelId);
    }

}]);  

angular.module('myApp.hotels.controllers').controller('SingleHotelController', ['$scope', '$http','$routeParams', 
  function($scope, $http, $routeParams) {

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

angular.module('myApp.hotels.controllers').controller('CreateHotelController', ['$scope', '$http', function($scope, $http ) {


    $scope.saveHotel=function(){
        if( $scope.hotelForm.$valid) {

            var url = 'backend/hotels_facade.php';

            var imageUpload = document.querySelector("#FormHotelImage");
            var file = imageUpload.files[0];

            var fd = new FormData();
            fd.append('name', $scope.hotel.name);
            fd.append('city', $scope.hotel.city);
            fd.append('region', $scope.hotel.region);
            fd.append("image",file, file.name);
            fd.append('shortname', $scope.hotel.shortname);
            fd.append('description', $scope.hotel.description);
            fd.append('excerpt', $scope.hotel.excerpt);
            
            $http.post(url, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            }).then(function(response) {
               console.log(response.data);
            }, function(response) {
              
            });
           
        
        } else {
          console.log('unable to save. Validation error');
        }       
    }  
  
}]);


angular.module('myApp.hotels.controllers').controller('UpdateHotelController', ['$scope', '$http', '$routeParams', 
  function($scope, $http,  $routeParams) {

    $scope.updateHotel=function(){
        if( $scope.hotelForm.$valid) {

            var url = 'backend/hotels_facade.php/1';

            var imageUpload = document.querySelector("#FormHotelImage");
            var file = imageUpload.files[0];

            var fd = new FormData();
            fd.append('hotel_id', $routeParams.itemId);
            fd.append('name', $scope.hotel.name);
            fd.append('city', $scope.hotel.city);
            fd.append('region', $scope.hotel.region);
            fd.append("image",file, file.name);
            fd.append('shortname', $scope.hotel.shortname);
            fd.append('description', $scope.hotel.description);
            fd.append('excerpt', $scope.hotel.excerpt);
            
            $http.put(url, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            }).then(function(response) {
               console.log(response.data);
            }, function(response) {
              
            });
           
        
        } else {
          console.log('unable to save. Validation error');
        }       
    }


}]);

