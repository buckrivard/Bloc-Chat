(function () {
	function MainCtrl($scope, Room, Message, $cookies, $location) {
		$scope.rooms = Room.all;
		$scope.activeRoom = null;
		$scope.username = $cookies.get('blocChatCurrentUser');

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

		$scope.removeUser = function() {
			$cookies.remove('blocChatCurrentUser');
			console.log("cookie removed " + $cookies.getAll());
			$location.path('/set-username');
		}
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', 'Message', '$cookies', '$location', MainCtrl]);
})();