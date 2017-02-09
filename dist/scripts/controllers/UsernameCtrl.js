(function () {
	function UsernameCtrl($scope, $cookies, $location) {
		$scope.setCurrentUser = function(blocChatCurrentUser) {
			if (blocChatCurrentUser) {
				$cookies.put('blocChatCurrentUser', blocChatCurrentUser);
				console.log("cookie added " + $cookies.getAll());
				$location.path('/');
			}
		}

		$scope.removeUser = function() {
			$cookies.remove('blocChatCurrentUser');
			console.log("cookie removed " + $cookies.getAll());
			$location.path('/set-username');
		}
	}
	angular
		.module('blocChat')
		.controller('UsernameCtrl', ['$scope', '$cookies', '$location', UsernameCtrl]);
})();