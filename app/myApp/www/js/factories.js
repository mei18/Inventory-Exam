angular.module('starter.factories', [])

.factory('Lists', function () {

  return {
    get: function($index) {
      for (var i = 0; i < lists.images.length; i++) {
        if (lists.images[i].id === parseInt($index)) {
          return lists.images[i];
        }
      }
      return null;
    }
  };
});