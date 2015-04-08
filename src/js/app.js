var clinicApp = angular.module('clinicApp', ['ui.router']);

var clinicViews = [
	{
		name: 'home',
		display: 'Advertorial',
		url: '/home',
		templateUrl: 'partials/advertorial.html',
		icon: 'truck'
	}, {
		name: 'intro',
		display: 'Intro Video',
		url: '/intro',
		templateUrl: 'partials/intro.html',
		icon: 'puzzle-piece'
	}, {
		name: 'login',
		display: 'Login',
		url: '/login',
		templateUrl: 'partials/login.html',
		icon: 'lock'
	}
];

clinicApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

<<<<<<< HEAD
		$routeProvider.when('/home', {
			templateUrl: 'hello.html',
			controller: 'HelloCtrl'
		}).when('/breedTest', {
			templateUrl: 'breed.html',
			controller: 'BreedCtrl'
		}).when('/entry1', {
			templateUrl: 'entry1.html',
			controller: 'Entry1Ctrl'
		}).when('/advertorial',
			advertorialTemplate
		).otherwise(advertorialTemplate);
=======
		_.map(clinicViews, function mapStates(view) {
			$stateProvider.state(view.name, {
				url: view.url,
				templateUrl: view.templateUrl
			});
		});
>>>>>>> 8f3cfc0d928d46f1a4b0d4c485037feb702b91f9
	}
]);

clinicApp.run(function runWithDependencies($rootScope) {
	$rootScope._ = _;
	$rootScope.moment = moment;
	$rootScope.pnl = pnl;
});
