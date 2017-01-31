(function () {
	function MainCtrl($scope, Room) {
		$scope.rooms = Room.all;
		$scope.addRoom = function(newName) {
			Room.addRoom(newName);
			newName = '';
		}
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})();