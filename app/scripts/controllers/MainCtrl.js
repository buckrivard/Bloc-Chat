(function () {
	function MainCtrl($scope, Room) {
		$scope.rooms = Room.all;
		$scope.addRoom = function(newName) {
			Room.addRoom(newName);
			$scope.roomName = null;
		}
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})();