(function () {
	function MainCtrl ('$scope', Room) {
		//var rooms = Room().all();

		$scope.rooms = Room.all;
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})