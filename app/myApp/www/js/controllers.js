angular.module('starter.controllers', [])

.controller('MediaCtrl', function ($firebaseArray) {
	var list = this;
	list.images = [];
	var ref = firebase.database().ref().child('products');

	$firebaseArray(ref).$loaded().then(function (results){
      list.images = results;
    },function(error){
      console.error(error);
      alert(error);
    });

})
 
	
