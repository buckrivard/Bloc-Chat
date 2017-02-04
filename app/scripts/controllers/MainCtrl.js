(function () {
	function MainCtrl($scope, Room, Message) {
		$scope.rooms = Room.all;
		$scope.activeRoom = null;
		//$scope.getByRoomId = Message.getByRoomId;

		$scope.addRoom = function(newName) {
			if (/\S/.test(roomName)) {
				Room.addRoom(newName);
			} else {
				return window.alert("Use your words, please!");	
				//window alert to be replaced by alternate notification method. Eventually.
			}
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