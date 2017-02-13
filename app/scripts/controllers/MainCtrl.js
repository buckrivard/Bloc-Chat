(function () {
	function MainCtrl($scope, Room, Message, Usernames) {
		$scope.rooms = Room.all;

		$scope.send = Message.send;

		$scope.activeRoom = null;
		$scope.username = Usernames.username;

		$scope.messageContent = null;

		//$scope.getByRoomId = Message.getByRoomId;

		$scope.addRoom = function(newName) {
			Room.addRoom(newName);
			$scope.roomName = null;
			/*
			if (!$scope.activeRoom) {
				$scope.selectRoom($scope.rooms - 1);
			}
			// What would I pass in here if I wanted the new room to become the active room when there is no activeRoom? 
			// I.e. on page load? As it is now it requires creating the room then clicking it
			*/
		}
		$scope.selectRoom = function(room) {
			$scope.activeRoom = room;
			$scope.messages = Message.getByRoomId(room.$id);
			$scope.nameOfRoom = room.room;
		}

		$scope.sendMessage = function(messageContent, roomId) {
			var roomId = $scope.activeRoom.$id;
			$scope.send($scope.messageContent, roomId);
			$scope.messageContent = "";
		}



	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', 'Message', 'Usernames', MainCtrl]);
})();