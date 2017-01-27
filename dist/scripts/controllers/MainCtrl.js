(function () {
	function MainCtrl ('$scope', Room) {
		var rooms = Room;

		$scope.rooms = rooms;
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', MainCtrl]);
})