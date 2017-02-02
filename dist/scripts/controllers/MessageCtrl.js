(function () {
	function MessageCtrl($scope, Message) {
		$scope.getByRoomId = Message.getByRoomId;
	}
	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Message', MessageCtrl]);
})();