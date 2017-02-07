(function() {
	function BlocChatCookies($cookies) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		/*if (!currentUser || currentUser === '') {
			//This code is unecessary when using ng-show on my signin.html, correct?
		}*/

		//I don't know how to use this .run provider. Does it need to be injected to mainCtrl 
		//so the binding on the signin input updates and either gets or sets a cookie based
		//on the user input?
	}

	angular
	.module('blocChat')
	.run(['$cookies', BlocChatCookies]);
})();