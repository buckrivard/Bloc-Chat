(function () {
	function MainCtrl($scope, Room, Message, $cookies, $rootScope) {
		$scope.rooms = Room.all;
		$scope.activeRoom = null;
		$scope.toggleSignIn = $rootScope.toggleSignIn;
		$scope.userName = $rootScope.currentUser;
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

		$scope.setCurrentUser = function(blocChatCurrentUser) {
			if (blocChatCurrentUser) {
				var newCookie = $cookies.put('blocChatCurrentUser', blocChatCurrentUser);
				$scope.userName = $rootScope.currentUser;
				$rootScope.toggleSignIn = false;
				$scope.toggleSignIn = $rootScope.toggleSignIn;
				$scope.currentUser = $rootScope.currentUser;
				console.log($cookies.getAll());
			} else {
				return
			}
		}

		$scope.removeUser = function() {
			$cookies.remove('blocChatCurrentUser');
			console.log("cookie removed");
			console.log($cookies.getAll());
			$scope.toggleSignIn = true;
			$scope.userName = null;
		}
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', 'Message', '$cookies', '$rootScope', MainCtrl]);
})();