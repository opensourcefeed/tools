var app = angular.module("app", []);

app.controller("EpochController", function($scope, $timeout) {
	
	$scope.convert = function() {
		var epoch = $scope.epoch;
		var date = new Date(epoch);
		$scope.showTime = date != 'Invalid Date' && $scope.epoch != null;
	};
	var tick = function() {
		$scope.currentTime = Date.now();
		$timeout(tick, 1000);
	};
	tick();
});