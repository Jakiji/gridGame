angular.module('starter.controllers')
	.controller('GameCtrl', function($scope, $rootScope) {
	  $scope.menu = function () {
	  	document.location.href = "#/menu";
	  }

	  $scope.win = false;
	  var elem = 0;

	  $scope.allEqual = function (table) {
	  	elem = table[0][0];
	  	for (x = 0; x < $rootScope.options.size; x++) {
	  	  for (y = 0; y < $rootScope.options.size; y++) {
	  	  	if (table[x][y] != elem) {
	  	  		return false;
	  	  	}
	  	  }
	  	}
	  	return true;
	  }

	  $scope.$watch('table', function (newVal) {
	  	console.log("change");
	  	$scope.win = $scope.allEqual(newVal);
	  }, true)
	});