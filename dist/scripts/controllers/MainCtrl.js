(function () {
	function MainCtrl($scope, Room) {
		$scope.rooms = Room.all;
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})();