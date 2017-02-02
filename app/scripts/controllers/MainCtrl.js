(function () {
	function MainCtrl($scope, Room, Message) {
		$scope.rooms = Room.all;
		$scope.getByRoomId = Message.getByRoomId;
		$scope.messages = Message.allMessages;
		$scope.addRoom = function(newName) {
			Room.addRoom(newName);
			$scope.roomName = null;
		}
		$scope.chooseActiveRoom = function(clicked) {
			activeRoom = clicked;
			$scope.activeRoom = activeRoom;
			$scope.messages = Message.getByRoomId(activeRoom);
		}
		$scope.selectRoom = function(room) {
			Message.getByRoomId(room)
		}
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', 'Message', MainCtrl]);
})();