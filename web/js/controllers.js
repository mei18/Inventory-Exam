angular.module('totoroProducts.controllers', [])

.controller('listController', function ($location, $products) {
	var list = this;

	$products.list().then(function (products){
		list.products = products;
	}, function(error){
		console.log(error);
		alert(error.message);
	})

	list.save = function () {
		$products.add(list.product).then(function(){
			alert('success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};

	list.remove = function (product) {
		$products.remove(product).then(function(data){
			return;
			// alert('Success');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
})

.controller('editController', function ($routeParams, $products){
	var edit = this;
	var id = $routeParams.id;
	edit.product = $products.get(id);

	edit.save = function () {
		$products.edit(edit.product).then(function(){
			alert('Success');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
})