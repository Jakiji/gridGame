angular.module('starter.controllers')
	.controller('MenuCtrl', function($scope, $rootScope) {
 	  $rootScope.options = {
 	  	'limit' : "3",
 	  	'size' : "3"
 	  };

 	  $rootScope.table=[];

	  var initTable = function () {
	  	$rootScope.table = [];
	  	var row = [];
	  	for (x = 0; x < parseInt($rootScope.options.size); x++) {
	  	  row = [0];
	  	  for (y = 1; y < parseInt($rootScope.options.size); y++) {
	  	  	row.push(0);
	  	  }
	  	  $rootScope.table.push(row);
	  	}

	  	var x = 0;
	  	var y = 0;

	  	for (i = 1; i <= 1000; i++) {
	  	  x = Math.floor(Math.random() * parseInt($rootScope.options.size));
	  	  y = Math.floor(Math.random() * parseInt($rootScope.options.size));
	  	  click(x, y);
	  	}
	  	
	  }

 	  $rootScope.play = function () {
 	  	initTable();
 	  	document.location.href = "#/game"
 	  }



 	  var click = function (x,y) {
 	  	if (x == 0) {
			if (y == 0) {
				$rootScope.table[x+1][y] += 1;
				$rootScope.table[x][y+1] += 1; 
				$rootScope.table[x+1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y+1] %= parseInt($rootScope.options.limit) + 1; 
			} else if (y == parseInt($rootScope.options.size) - 1) {
				$rootScope.table[x+1][y] += 1;
				$rootScope.table[x][y-1] += 1; 
				$rootScope.table[x+1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y-1] %= parseInt($rootScope.options.limit) + 1; 
			} else {
				$rootScope.table[x][y+1] += 1;
				$rootScope.table[x+1][y] += 1;
				$rootScope.table[x][y-1] += 1; 
				$rootScope.table[x][y+1] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x+1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y-1] %= parseInt($rootScope.options.limit) + 1; 
			}
		} else if (x == parseInt($rootScope.options.size) - 1) {
			if (y == 0) {
				$rootScope.table[x-1][y] += 1;
				$rootScope.table[x][y+1] += 1;
				$rootScope.table[x-1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y+1] %= parseInt($rootScope.options.limit) + 1;
			} else if (y == parseInt($rootScope.options.size) - 1) {
				$rootScope.table[x-1][y] += 1;
				$rootScope.table[x][y-1] += 1; 
				$rootScope.table[x-1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y-1] %= parseInt($rootScope.options.limit) + 1; 
			} else {
				$rootScope.table[x-1][y] += 1;
				$rootScope.table[x][y+1] += 1;
				$rootScope.table[x][y-1] += 1; 
				$rootScope.table[x-1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y+1] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y-1] %= parseInt($rootScope.options.limit) + 1; 
			}
		} else {
			if (y == 0) {
				$rootScope.table[x+1][y] += 1;
				$rootScope.table[x][y+1] += 1;
				$rootScope.table[x-1][y] += 1; 
				$rootScope.table[x+1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y+1] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x-1][y] %= parseInt($rootScope.options.limit) + 1; 
			} else if (y == parseInt($rootScope.options.size) - 1) {
				$rootScope.table[x-1][y] += 1;
				$rootScope.table[x][y-1] += 1; 
				$rootScope.table[x+1][y] += 1; 
				$rootScope.table[x-1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y-1] %= parseInt($rootScope.options.limit) + 1; 
				$rootScope.table[x+1][y] %= parseInt($rootScope.options.limit) + 1; 
			} else {
				$rootScope.table[x-1][y] += 1;
				$rootScope.table[x][y+1] += 1;
				$rootScope.table[x][y-1] += 1;
				$rootScope.table[x+1][y] += 1; 
				$rootScope.table[x-1][y] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y+1] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x][y-1] %= parseInt($rootScope.options.limit) + 1;
				$rootScope.table[x+1][y] %= parseInt($rootScope.options.limit) + 1;
			}
		}
 	  };
	});