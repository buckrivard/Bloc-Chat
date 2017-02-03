(function () {
	function MainCtrl($scope, Room, Message) {
		$scope.rooms = Room.all;

		//$scope.getByRoomId = Message.getByRoomId;

		$scope.addRoom = function(newName) {
			Room.addRoom(newName);
			$scope.roomName = null;
		}
		$scope.selectRoom = function(room) {
			$scope.activeRoom = room;
			$scope.messages = Message.getByRoomId(room.$id);
			$scope.nameOfRoom = room.room;
		}
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', 'Message', MainCtrl]);
})();