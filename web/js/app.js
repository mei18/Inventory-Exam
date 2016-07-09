angular.module('totoroProducts', ['totoroProducts.controllers', 'totoroProducts.factories', 'ngRoute','firebase'])

.config(function($routeProvider) {
	$routeProvider
		.when('/products', {
			templateUrl: 'views/products.html'
		})
		.when('/products', {
			controller: 'listController as list',
			templateUrl: 'views/products.html'
		})
		.when('/product/:id', {
			controller: 'editController as product',
			templateUrl: 'views/product.html'

		})
		.otherwise({
			redirecTo: '/products'
		});
		 // Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyCYf24HUySojyf2ZBQ_BQlJuJ_P8VfxSHk",
		    authDomain: "prograinteractiva.firebaseapp.com",
		    databaseURL: "https://prograinteractiva.firebaseio.com",
		    storageBucket: "prograinteractiva.appspot.com",
		  };
		  firebase.initializeApp(config);
});