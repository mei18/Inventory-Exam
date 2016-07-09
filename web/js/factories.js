angular.module('totoroProducts.factories', [])

.factory('$products', function ($firebaseArray) {
	var products = {};
	var ref = firebase.database().ref().child('products');
	var list = $firebaseArray(ref);
	var cache = [];
	
	products.list = function () {	
		return list.$loaded().then(function (products){
			return cache = products;
		});
	};

	products.add = function (product) {
		return list.$add(product);
	};

	products.get = function (id) {
		return cache.$getRecord(id);
	};

	products.remove = function (product) {
		return list.$remove(product);
	};

	products.edit = function (product) {
		return list.$save(product);
	};

	return products;
})