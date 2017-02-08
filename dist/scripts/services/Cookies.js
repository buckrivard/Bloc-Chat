(function() {
	function BlocChatCookies($cookies, $rootScope) {
		$rootScope.currentUser = $cookies.get('blocChatCurrentUser');

		if (!$rootScope.currentUser || $rootScope.currentUser === '') {
			$rootScope.toggleSignIn = true;
			console.log("do we ever even get here? If so, toggleSignIn is: " + $rootScope.toggleSignIn);
		} else {
			$rootScope.toggleSignIn = false;
		}
	}

	angular
	.module('blocChat')
	.run(['$cookies', '$rootScope', BlocChatCookies]);
})();



