angular.module('myApp.images',['ngRoute', 'ngResource', 'myApp.images.controllers', 'myApp.images.services']);

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
