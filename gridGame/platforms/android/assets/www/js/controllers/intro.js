angular.module('starter.controllers')
	.controller('IntroCtrl', function($scope, $rootScope, $ionicSlideBoxDelegate) {
 		$scope.table = [
 			[1,2,0],
 			[1,4,1],
 			[2,0,0]
 		];

 		$scope.click = function(x,y) {
 			if (x == 0) {
 				if (y == 0) {
 					$scope.table[x+1][y] += 1;
 					$scope.table[x][y+1] += 1; 
 				} else if (y == 2) {
 					$scope.table[x+1][y] += 1;
 					$scope.table[x][y-1] += 1; 
 				} else {
 					$scope.table[x][y+1] += 1;
 					$scope.table[x+1][y] += 1;
 					$scope.table[x][y-1] += 1; 
 				}
 			} else if (x == 2) {
 				if (y == 0) {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y+1] += 1;
 				} else if (y == 2) {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y-1] += 1; 
 				} else {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y+1] += 1;
 					$scope.table[x][y-1] += 1; 
 				}
 			} else {
 				if (y == 0) {
 					$scope.table[x+1][y] += 1;
 					$scope.table[x][y+1] += 1;
 					$scope.table[x-1][y] += 1; 
 				} else if (y == 2) {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y-1] += 1; 
 					$scope.table[x+1][y] += 1; 
 				} else {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y+1] += 1;
 					$scope.table[x][y-1] += 1;
 					$scope.table[x+1][y] += 1; 
 				}
 			}
 			
 		}

 		$scope.click2 = function(x,y) {
 			if (x == 0) {
 				if (y == 0) {
 					$scope.table[x+1][y] += 1;
 					$scope.table[x][y+1] += 1; 
 					$scope.table[x+1][y] %= 4;
 					$scope.table[x][y+1] %= 4; 
 				} else if (y == 2) {
 					$scope.table[x+1][y] += 1;
 					$scope.table[x][y-1] += 1; 
 					$scope.table[x+1][y] %= 4;
 					$scope.table[x][y-1] %= 4; 
 				} else {
 					$scope.table[x][y+1] += 1;
 					$scope.table[x+1][y] += 1;
 					$scope.table[x][y-1] += 1; 
 					$scope.table[x][y+1] %= 4;
 					$scope.table[x+1][y] %= 4;
 					$scope.table[x][y-1] %= 4;
 				}
 			} else if (x == 2) {
 				if (y == 0) {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y+1] += 1;
 					$scope.table[x-1][y] %= 4;
 					$scope.table[x][y+1] %= 4;
 				} else if (y == 2) {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y-1] += 1; 
 					$scope.table[x-1][y] %= 4;
 					$scope.table[x][y-1] %= 4; 
 				} else {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y+1] += 1;
 					$scope.table[x][y-1] += 1; 
 					$scope.table[x-1][y] %= 4;
 					$scope.table[x][y+1] %= 4;
 					$scope.table[x][y-1] %= 4; 
 				}
 			} else {
 				if (y == 0) {
 					$scope.table[x+1][y] += 1;
 					$scope.table[x][y+1] += 1;
 					$scope.table[x-1][y] += 1; 
 					$scope.table[x+1][y] %= 4;
 					$scope.table[x][y+1] %= 4;
 					$scope.table[x-1][y] %= 4; 
 				} else if (y == 2) {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y-1] += 1; 
 					$scope.table[x+1][y] += 1; 
 					$scope.table[x-1][y] %= 4;
 					$scope.table[x][y-1] %= 4; 
 					$scope.table[x+1][y] %= 4; 
 				} else {
 					$scope.table[x-1][y] += 1;
 					$scope.table[x][y+1] += 1;
 					$scope.table[x][y-1] += 1;
 					$scope.table[x+1][y] += 1; 
 					$scope.table[x-1][y] %= 4;
 					$scope.table[x][y+1] %= 4;
 					$scope.table[x][y-1] %= 4;
 					$scope.table[x+1][y] %= 4; 
 				}
 			}
 			
 		}

 		$scope.nextSlide = function() {
 			$scope.table = [
	 			[0,0,0],
	 			[0,0,0],
	 			[0,0,0]
	 		];
 			$ionicSlideBoxDelegate.next();
 		}

 		$scope.nextLastSlide = function() {
 			document.location.href = "#/app/menu";
 		}

 		$scope.previousSlide1 = function() {
 			$scope.table = [
	 			[1,2,0],
	 			[1,4,1],
	 			[2,0,0]
	 		];
 			$ionicSlideBoxDelegate.previous();
 		}

 		$scope.previousSlide2 = function() {
 			$scope.table = [
	 			[0,0,0],
	 			[0,0,0],
	 			[0,0,0]
	 		];
 			$ionicSlideBoxDelegate.previous();
 		}
	});