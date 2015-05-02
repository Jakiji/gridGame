angular.module('starter.directives')
	.directive('gameTile', function() {
	  return {
	  	scope: {
	  	  value : '=',
	  	  x: '=',
	  	  y: '=',
	  	  table: '=',
	  	  limit: '=',
	  	  size: '='
	  	},
	  	templateUrl : "templates/tile.html",
	  	link: function (scope, element, attrs) {
	  		element.on('click', function() {
	 			if (scope.x == 0) {
	 				if (scope.y == 0) {
	 					scope.table[scope.x+1][scope.y] += 1;
	 					scope.table[scope.x][scope.y+1] += 1; 
	 					scope.table[scope.x+1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y+1] %= parseInt(scope.limit) + 1; 
	 				} else if (scope.y == parseInt(scope.size) - 1) {
	 					scope.table[scope.x+1][scope.y] += 1;
	 					scope.table[scope.x][scope.y-1] += 1; 
	 					scope.table[scope.x+1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y-1] %= parseInt(scope.limit) + 1; 
	 				} else {
	 					scope.table[scope.x][scope.y+1] += 1;
	 					scope.table[scope.x+1][scope.y] += 1;
	 					scope.table[scope.x][scope.y-1] += 1; 
	 					scope.table[scope.x][scope.y+1] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x+1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y-1] %= parseInt(scope.limit) + 1; 
	 				}
	 			} else if (scope.x == parseInt(scope.size) - 1) {
	 				if (scope.y == 0) {
	 					scope.table[scope.x-1][scope.y] += 1;
	 					scope.table[scope.x][scope.y+1] += 1;
	 					scope.table[scope.x-1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y+1] %= parseInt(scope.limit) + 1;
	 				} else if (scope.y == parseInt(scope.size) - 1) {
	 					scope.table[scope.x-1][scope.y] += 1;
	 					scope.table[scope.x][scope.y-1] += 1; 
	 					scope.table[scope.x-1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y-1] %= parseInt(scope.limit) + 1; 
	 				} else {
	 					scope.table[scope.x-1][scope.y] += 1;
	 					scope.table[scope.x][scope.y+1] += 1;
	 					scope.table[scope.x][scope.y-1] += 1; 
	 					scope.table[scope.x-1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y+1] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y-1] %= parseInt(scope.limit) + 1; 
	 				}
	 			} else {
	 				if (scope.y == 0) {
	 					scope.table[scope.x+1][scope.y] += 1;
	 					scope.table[scope.x][scope.y+1] += 1;
	 					scope.table[scope.x-1][scope.y] += 1; 
	 					scope.table[scope.x+1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y+1] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x-1][scope.y] %= parseInt(scope.limit) + 1; 
	 				} else if (scope.y == parseInt(scope.size) - 1) {
	 					scope.table[scope.x-1][scope.y] += 1;
	 					scope.table[scope.x][scope.y-1] += 1; 
	 					scope.table[scope.x+1][scope.y] += 1; 
	 					scope.table[scope.x-1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y-1] %= parseInt(scope.limit) + 1; 
	 					scope.table[scope.x+1][scope.y] %= parseInt(scope.limit) + 1; 
	 				} else {
	 					scope.table[scope.x-1][scope.y] += 1;
	 					scope.table[scope.x][scope.y+1] += 1;
	 					scope.table[scope.x][scope.y-1] += 1;
	 					scope.table[scope.x+1][scope.y] += 1; 
	 					scope.table[scope.x-1][scope.y] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y+1] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x][scope.y-1] %= parseInt(scope.limit) + 1;
	 					scope.table[scope.x+1][scope.y] %= parseInt(scope.limit) + 1;
	 				}
	 			}
	 			scope.$apply();
	  		});
	  	}
	  };
	});