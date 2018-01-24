var app = angular.module("app", []);

app.controller("EpochController", function($scope, $timeout) {
	$scope.unit = 1;
	$scope.zone = "+8";

	$scope.convert = function() {

		var epoch = $scope.epoch;
		var unit = $scope.unit;
		var date = new Date(epoch * unit);
		$scope.showTime = date != 'Invalid Date' && $scope.epoch != null;
	};
	var tick = function() {
		$scope.currentTime = Date.now();
		$timeout(tick, 1000);
	};
	tick();
});