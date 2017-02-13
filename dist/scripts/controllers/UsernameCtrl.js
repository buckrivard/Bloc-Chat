(function () {
	function UsernameCtrl($scope, Usernames) {

		$scope.blocChatCurrentUser = Usernames.username;

		$scope.removeUser = Usernames.removeUser;

		$scope.setCurrentUser = Usernames.setCurrentUser;
	}
	angular
		.module('blocChat')
		.controller('UsernameCtrl', ['$scope', 'Usernames', UsernameCtrl]);
})();