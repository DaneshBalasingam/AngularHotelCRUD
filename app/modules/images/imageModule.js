angular.module('myApp.images',['ngRoute', 'myApp.images.controllers']);

angular.module('myApp.images').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/uploadImage', {
    templateUrl: 'modules/images/views/uploadImage.html',
    controller: 'UploadImageController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
