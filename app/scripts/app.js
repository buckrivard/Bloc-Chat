(function() {
	function config($stateProvider, $locationProvider) {
	    $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
	    });	
        
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/main.html'
        })
            .state('username', {
                url: '/set-username',
                controller: 'UsernameCtrl as username',
                templateUrl: '/templates/signin.html'
            })

    }

	angular
        .module('blocChat', ['ui.router', 'firebase', 'ngCookies'])
        .config(config);

})();