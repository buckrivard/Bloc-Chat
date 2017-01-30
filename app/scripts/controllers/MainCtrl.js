(function () {
	function MainCtrl(Room, $scope) {
		$scope.rooms = Room.all;
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})();