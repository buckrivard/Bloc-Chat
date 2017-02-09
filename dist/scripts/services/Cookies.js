(function() {
	function BlocChatCookies($cookies, $location) {
		var currentUser = $cookies.get('blocChatCurrentUser');

		if (!currentUser || currentUser === '') {
			console.log($cookies.getAll());
			console.log("attempted new url");
			$location.path('/set-username');
		}
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$location', BlocChatCookies]);
})();



