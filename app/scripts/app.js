(function() {
	function config($stateProvider, $locationProvider) {
		$stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '<h1>testing</h1>'
            })
    }

	angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);

})();