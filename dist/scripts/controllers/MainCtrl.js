(function () {
	function MainCtrl($scope, Room) {
		$scope.rooms = Room.all;
		this.addRoom = Room.addRoom;
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})();