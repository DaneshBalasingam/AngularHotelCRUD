'use strict'

angular.module('myApp.hotels.controllers',[]);

angular.module('myApp.hotels.controllers').controller('ListHotelController', ['$scope', 'Hotel',
  function($scope, Hotel) {

    $scope.hotels = Hotel.query();
    $scope.hotelOrder = 'name';

}]); 

angular.module('myApp.hotels.controllers').controller('AdminHotelController', ['$scope', '$location', 'Hotel',
  function($scope, $location, Hotel) {

    $scope.hotels = Hotel.query();

    $scope.editHotel=function(hotelId){
      $location.path('/updateHotel/' + hotelId);
    }

}]);  

angular.module('myApp.hotels.controllers').controller('SingleHotelController', ['$scope', '$http','$routeParams', 
  'Hotel', function($scope, $http, $routeParams, Hotel) {

    $http.get('backend/hotels_facade.php').success(function(data) {
      $scope.hotels = data;
      //$scope.hotels = Hotel.query();
      $scope.currItem = $routeParams.hotelId;

      if ($routeParams.hotelId > 0) {
        $scope.prevItem = Number($routeParams.hotelId)-1;
      } else {
        $scope.prevItem = $scope.hotels.length-1;
      }

      if ($routeParams.hotelId < $scope.hotels.length-1) {
        $scope.nextItem = Number($routeParams.hotelId)+1;
      } else {
        $scope.nextItem = 0;
      }

    });
}]);

angular.module('myApp.hotels.controllers').controller('CreateHotelController', ['$scope', '$http', 'Hotel', 'Image', 
    'imageLightboxService',
    function($scope, $http, Hotel, Image, imageLightboxService ) {

    var hotel_Image = imageLightboxService.initialize($(document), $scope, '#FormHotelImage');

    $scope.saveHotel=function(){
       
        if( $scope.hotelForm.$valid) {
             
            $scope.hotel.imageId = hotel_Image.value;
            Hotel.create($scope.hotel);
            
        } else {
          console.log('unable to save. Validation error');
        }

    }


  
}]);


angular.module('myApp.hotels.controllers').controller('UpdateHotelController', ['$scope', '$http', '$routeParams', 'Hotel',
  'imageLightboxService', 
  function($scope, $http,  $routeParams, Hotel, imageLightboxService) {

    //console.log($routeParams.hotelId);
    $scope.hotel = Hotel.get({ id: $routeParams.hotelId });
    //console.log($scope.hotel);
    var hotel_Image = imageLightboxService.initialize($(document), $scope, '#FormHotelImage');

    /*$scope.updateHotel=function(){
        if( $scope.hotelForm.$valid) {

            var url = 'backend/hotels_facade.php/8';

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
    }*/


}]);

