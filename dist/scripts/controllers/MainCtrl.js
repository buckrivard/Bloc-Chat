(function () {
	function MainCtrl($scope, Room) {
		$scope.rooms = Room.all;
		$scope.addRoom = function(newName) {
			Room.addRoom(newName);
			$scope.roomName = null;
		}
		$scope.chooseActiveRoom = function(clicked) {
			activeRoom = clicked;
			$scope.activeRoom = activeRoom;
			console.log(activeRoom);
			console.log($scope);
		}
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})();