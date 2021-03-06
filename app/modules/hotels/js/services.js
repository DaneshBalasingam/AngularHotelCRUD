'use strict'

angular.module('myApp.hotels.services', []);

angular.module('myApp.hotels.services').factory('Hotel', ['$resource', function($resource) {

    return $resource('backend/hotels_facade.php/:id', {id:'@_id'}, {
        get: { method: 'GET', isArray: true },
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'},
        update: { method: 'PUT'},
        remove: { method: 'DELETE' }
    })

}]); 
