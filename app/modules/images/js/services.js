'use strict'

angular.module('myApp.images.services', []);

angular.module('myApp.images.services').factory('Image', ['$resource', function($resource) {

    return $resource('backend/images_facade.php', {}, {
        query: { method: 'GET', isArray: true }
    })

}]);

angular.module('myApp.images.services').factory('ImageUploadService', ['$http', function($http) {

    //this.post = function

}]);  