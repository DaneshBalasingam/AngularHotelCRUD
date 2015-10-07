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
            
            $scope.hotel.imageId = hotel_Image.id;
            Hotel.create($scope.hotel);
            
        } else {
          console.log('unable to save. Validation error');
        }

    }


  
}]);

angular.module('myApp.hotels.controllers').controller('UpdateHotelController', ['$scope', '$http', '$routeParams', 'Hotel', 'Image', 
    'imageLightboxService',
    function($scope, $http, $routeParams, Hotel, Image, imageLightboxService ) {

    var hotel_Image = imageLightboxService.initialize($(document), $scope, '#FormHotelImage');

    Hotel.get({ id: $routeParams.hotelId },function(hotel) {

        $scope.hotel = hotel[0];
        hotel_Image.id = hotel[0].image_id;
        hotel_Image.name = hotel[0].image_name;
        image_url = "backend/uploads/" + hotel_Image.name;
        $('#selected_image').attr("src", image_url);
        imageLightboxService.setImage($(document), $scope, hotel_Image);

    });




  
}]);



