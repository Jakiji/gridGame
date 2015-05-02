angular.module('starter.directives')
	.directive('gameGrid', function ($rootScope) {
	  return {
	  	template : function (element, attrs) {
	  	  var html = '<div class="wingame" ng-show="win"><div class="text_wingame"> <i class="ion-ios-star-outline"></i> You won ! <i class="ion-ios-star-outline"></i> <div class="wingame_comment"> Try again <br/> or <br/> change difficulty. </div></div></div>';
	  	  var size = $rootScope.options.size;
	  	
	  	  for (x = 0; x < parseInt(size); x++) {
	  	  	html += '<div class="row">';
	  	  	for (y = 0; y < parseInt(size); y++) {
	  	  		html += '<game-tile class="col" limit="options.limit" size="options.size" x="' + x.toString() + '" y="' + y.toString() + '" value="table[' + x.toString() + '][' + y.toString() + ']" table="table"></game-tile>';
	  	  	}
	  	  	html += '</div>';
	  	  }
	  	  return html;
	  	}
	  };
	});