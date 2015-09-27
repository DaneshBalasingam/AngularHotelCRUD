'use strict'

angular.module('myApp.images.services', []);

angular.module('myApp.images.services').factory('Image', ['$resource', function($resource) {

    return $resource('backend/images_facade.php', {}, {
        query: { method: 'GET', isArray: true }
    })

}]);

angular.module('myApp.images.services').factory('imageUploadService', ['$http', function($http) {
	
	var uploadImage = function (file){

		var url = 'backend/images_facade.php';

       var fd = new FormData();
        fd.append("image",file, file.name);

        return $http.post(url, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            }).then(function(response) {

            	return response.data;
              
        });

        
	};

	return {
    	uploadImage: uploadImage
  	};


}]);

angular.module('myApp.images.services').factory('imageLightboxService', [function() {

    var toggleLightbox = function(doc, scp) {

        scp.setImage = function (){
          doc.ready(function() {
              $('#setImageLightbox').toggle();
          });

        }
        

        scp.showImageLightbox = function (){
          doc.ready(function() {
              $('#setImageLightbox').toggle();
          });

        }

        scp.closeImageLightbox = function (){
          doc.ready(function() {
              $('#setImageLightbox').toggle();
          });

        }

        doc.on('click', '.image', function(e) {

            $(".image").removeClass("image_selected");

            $(this).addClass("image_selected");

            $('#FormHotelImage').val($(this).attr('data-imageId'));
            hotel_image = $(this).attr('data-imageId');

            var selected_image = 'backend/uploads/' + $(this).attr('data-imageName');
            $('#selected_image').attr('src', selected_image);    
        });
        

    };

    return {
      toggleLightbox: toggleLightbox
    };

}]);