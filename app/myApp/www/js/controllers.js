angular.module('starter.controllers', [])

.controller('MediaCtrl', function ($firebaseArray) {
	var lists = this;
	lists.images = [];
	var ref = firebase.database().ref().child('products');

	$firebaseArray(ref).$loaded().then(function (results){
      lists.images = results;
    },function(error){
      console.error(error);
      alert(error);
    });

})
 
	
