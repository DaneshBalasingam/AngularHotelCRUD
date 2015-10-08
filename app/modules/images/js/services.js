'use strict'

angular.module('myApp.images.services', []);

angular.module('myApp.images.services').factory('Image', ['$resource', function($resource) {

    return $resource('backend/images_facade.php', {}, {
        query: { method: 'GET', isArray: true }
    })

}]);

angular.module('myApp.images.services').factory('imageLightboxService', ['$http', 'Image', function($http, Image) {

    var images = Image.query();
    
    var initialize = function(doc, scp, imageFormName) {

        scp.images = images;

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

        scp.saveImage = function () {

            var imageUpload = document.querySelector("#image_upload");
            var file = imageUpload.files[0];

            uploadImage(file).then(function(response){
                  scp.images = response;
                }, function(response) {

            });
        
        }

        function Image()
        {
          this.id = " ";
          this.name = " ";
        }

        var Image = new Image();

        doc.on('click', '.image', function(e) {

            $(".image").removeClass("image_selected");

            $(this).addClass("image_selected");

            $(imageFormName).val($(this).attr('data-imageId'));
            Image.id = $(this).attr('data-imageId');

            var selected_image = 'backend/uploads/' + $(this).attr('data-imageName');
            $('#selected_image').attr('src', selected_image);    
        });

        
        return Image;
    };

    var setImage = function (doc, scp, Image) {
        
        doc.ready(function() {
              
              $(".image").each(function() {
                  
                  if( $( this ).attr('data-imageId') == Image.id ) {

                    $(this).addClass("image_selected");
                  }
              });

              
        });
    }

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
      initialize: initialize,
      uploadImage: uploadImage,
      setImage: setImage
    };

}]);