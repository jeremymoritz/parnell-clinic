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
	}
];

clinicApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		_.map(clinicViews, function mapStates(view) {
			$stateProvider.state(view.name, {
				url: view.url,
				templateUrl: view.templateUrl
			});
		});
	}
]);

clinicApp.run(function runWithDependencies($rootScope) {
	$rootScope._ = _;
	$rootScope.moment = moment;
	$rootScope.pnl = pnl;
});
