(function () {
	function MainCtrl ('$scope', Room) {
		var rooms = Room().all();

		$scope.rooms = rooms;
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', MainCtrl]);
})