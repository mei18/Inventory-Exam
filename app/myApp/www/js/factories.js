angular.module('starter.factories', [])

.factory('Lists', function () {

  return {
    get: function($index) {
      for (var i = 0; i < allImages.length; i++) {
        if (allImages[i].id === parseInt($index)) {
          return allImages[i];
        }
      }
      return null;
    }
  };
});