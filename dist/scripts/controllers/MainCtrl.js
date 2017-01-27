(function () {
	function MainCtrl ('$scope', Room) {
		this.rooms = Room;

	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', MainCtrl]);
})