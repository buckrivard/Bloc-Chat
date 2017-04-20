(function () {
	function Usernames ($cookies, $location) {

		var username = $cookies.get('blocChatCurrentUser');

		var removeUser = function() {
			$cookies.remove('blocChatCurrentUser');
			console.log("cookie removed " + $cookies.getAll());
			$location.path('/set-username');
			blocChatCurrentUser = null;
		};

		var setCurrentUser = function(blocChatCurrentUser) {
			if (blocChatCurrentUser) {
				$cookies.put('blocChatCurrentUser', blocChatCurrentUser);
				console.log("cookie added " + $cookies.getAll());
				$location.path('/');
			}
		}

		return {
			username: username,
			removeUser: removeUser,
			setCurrentUser: setCurrentUser
		};

	}
	angular
		.module('blocChat')
		.factory('Usernames', ['$cookies', '$location', Usernames]);
})();
