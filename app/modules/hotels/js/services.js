'use strict'

angular.module('myApp.hotels.services', []);

angular.module('myApp.hotels.services').factory('Hotel', ['$resource', function($resource) {

    return $resource('backend/hotels_facade.php', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'}
    })

}]); 

