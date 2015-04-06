var clinicApp = angular.module('clinicApp', ['ngRoute']);

clinicApp.config([
	'$routeProvider',
	'$locationProvider',
	'$httpProvider',
	function config($routeProvider, $locationProvider, $httpProvider) {
		var advertorialTemplate = {
			templateUrl: 'advertorial.html',
			controller: 'AdvertorialCtrl'
		};

		$routeProvider.when('/home', {
			templateUrl: 'hello.html',
			controller: 'HelloCtrl'
		}).when('/advertorial',
			advertorialTemplate
		).otherwise(advertorialTemplate);
	}
]);

clinicApp.run(function runWithDependencies($rootScope) {
	$rootScope._ = _;
	$rootScope.moment = moment;
});
